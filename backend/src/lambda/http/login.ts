import 'source-map-support/register';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';

import { createLogger } from '../../utils/logger';

import { UserAccess } from '../datalayer/UserdDBAcceess';

// import { parseUserId } from '../../auth/utils';

const logger = createLogger('Login');

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  logger.info(`create request for ${JSON.stringify(event.body)} received!!`);

  // const token: string = event.headers.Authorization.split(' ')[1];

  // const userdetails: CreateUserReq = JSON.parse(event.body);
  //userId: userId,

  const qp = event.queryStringParameters['email'];

  if (!qp) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: `Pass email as query parameter`,
    };
  }

  const ItemResponse = await new UserAccess().getUserId(qp);

  return {
    statusCode: ItemResponse.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: ItemResponse.results,
  };
};
