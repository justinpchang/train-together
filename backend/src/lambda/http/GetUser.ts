import 'source-map-support/register';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';

import { createLogger } from '../../utils/logger';

import { UserAccess } from '../datalayer/UserdDBAcceess';

// import { parseUserId } from '../../auth/utils';

const logger = createLogger('InsertUserDB');

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  logger.info(`create request for ${JSON.stringify(event.body)} received!!`);

  // const token: string = event.headers.Authorization.split(' ')[1];

  const userId = event.headers.Authorization.split(' ')[1];

  // const userdetails: CreateUserReq = JSON.parse(event.body);
  //userId: userId,

  // const userId = event.headers.userId;

  logger.info(`${userId}`);

  const ItemResponse = await new UserAccess().getUser(userId);

  return {
    statusCode: ItemResponse.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: ItemResponse.results,
  };
};
