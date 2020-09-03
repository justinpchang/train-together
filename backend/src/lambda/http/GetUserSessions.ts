import 'source-map-support/register';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';

import { createLogger } from '../../utils/logger';

import { UserAccess } from '../datalayer/UserdDBAcceess';
import { SessionAccess } from '../datalayer/SessionDBAccess';
import { SessionItem } from '../../models/SessionItem';

// import { parseUserId } from '../../auth/utils';

const logger = createLogger('InsertUserDB');

function compareSession(a: SessionItem, b: SessionItem) {
  // a should come before b in the sorted order
  if (a.eventDate < b.eventDate) {
    return 1;
    // a should come after b in the sorted order
  } else if (a.eventDate > b.eventDate) {
    return -1;
    // a and b are the same
  } else {
    return 0;
  }
}

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  logger.info(`create request for ${JSON.stringify(event.body)} received!!`);

  // const token: string = event.headers.Authorization.split(' ')[1];

  const userId = event.headers.Authorization.split(' ')[1];

  //   const userdetails: CreateUserReq = JSON.parse(event.body);
  //userId: userId,

  // const userId = event.headers.userId;

  logger.info(`${userId}`);

  const ItemResponse = await new UserAccess().getUser(userId);

  const temp = JSON.parse(ItemResponse.results);

  logger.info(`${temp.Item.history}`);

  var sessions = new Array();

  const sessiondbObj = new SessionAccess();

  for (let sessionId of temp.Item.history) {
    var tempresp = await sessiondbObj.getSession(sessionId);
    if (tempresp.status === 200) {
      var tempSession = JSON.parse(tempresp.results).Item;
      sessions.push(tempSession);
    }
  }

  var response = sessions.sort(compareSession);

  return {
    statusCode: ItemResponse.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(response),
  };
};
