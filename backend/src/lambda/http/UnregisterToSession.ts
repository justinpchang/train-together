import 'source-map-support/register';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';

import { createLogger } from '../../utils/logger';

import { UserAccess } from '../datalayer/UserdDBAcceess';
import { SessionAccess } from '../datalayer/SessionDBAccess';

// import { parseUserId } from '../../auth/utils';
// import { CreateUserReq } from '../../models/CreateUserReq';

const logger = createLogger('InsertUserDB');

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  logger.info(`create request for ${JSON.stringify(event.body)} received!!`);

  //   const token: string = event.headers.Authorization.split(' ')[1];

  //   const userId = await parseUserId(token);

  //   const userdetails: CreateUserReq = JSON.parse(event.body);
  //userId: userId,

  const userId = event.headers.userId;

  logger.info(`${userId}`);

  const sessionId = JSON.parse(event.body).sessionId;

  const userAccess = new UserAccess();

  const ItemResponse = await userAccess.getUser(userId);

  const temp = JSON.parse(ItemResponse.results);

  var flag = true;
  var pos = 0;
  for (let userSessionId of temp.Item.history) {
    if (userSessionId === sessionId) {
      flag = false;
      pos = pos + 1;
    }
  }

  if (flag) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: 'Failed because Not Enrolled',
    };
  }

  const resp = await userAccess.unregisterToSession(userId, pos);

  await new SessionAccess().decUserAttendee(sessionId);

  return {
    statusCode: resp.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: resp.results,
  };
};
