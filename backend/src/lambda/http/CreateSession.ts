import 'source-map-support/register';
import * as uuid from 'uuid';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';

import { createLogger } from '../../utils/logger';

import { SessionAccess } from '../datalayer/SessionDBAccess';

// import { parseUserId } from '../../auth/utils';
import { CreateSessionReq } from '../../models/CreateSessionReq';

const logger = createLogger('CreateUserDB');

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  logger.info(`create request for ${JSON.stringify(event.body)} received!!`);

  // const token: string = event.headers.Authorization.split(' ')[1];

  const userId = event.headers.Authorization.split(' ')[1];

  const sessiondetails: CreateSessionReq = JSON.parse(event.body);

  const sessionId = uuid.v4();

  const ItemResponse = await new SessionAccess().createSession({
    createdAt: new Date().toISOString(),
    ...sessiondetails,
    userId,
    sessionId,
  });

  return {
    statusCode: ItemResponse.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: ItemResponse.results,
  };
};
