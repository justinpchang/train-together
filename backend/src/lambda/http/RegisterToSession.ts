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

  for (let userSessionId of temp.Item.history) {
    if (userSessionId === sessionId) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: 'Failed because Already Enrolled',
      };
    }
  }

  const resp1 = await new SessionAccess().decUserSlots(sessionId);

  var resp;

  if (resp1.status === 200) {
    resp = await userAccess.registerToSession(userId, sessionId);
  }

  return {
    statusCode: resp.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: resp.results,
  };
};
