import 'source-map-support/register';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';

import { createLogger } from '../../utils/logger';

import { SessionAccess } from '../datalayer/SessionDBAccess';
import { SessionItem } from '../../models/SessionItem';

// import { parseUserId } from '../../auth/utils';
// import { CreateUserReq } from '../../models/CreateUserReq';

const logger = createLogger('getAllSessionDB');

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

  // const userId = await parseUserId(token);

  // const userdetails: CreateUserReq = JSON.parse(event.body);
  //userId: userId,

  const response = await new SessionAccess().getAllSessions();

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(response.Items.sort(compareSession)),
  };
};
