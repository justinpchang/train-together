import 'source-map-support/register';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';

// import { CreateUserRequest } from '../../requests/CreateTodoRequest'

import { createLogger } from '../../utils/logger';

import { UserAccess } from '../datalayer/UserdDBAcceess';

import { UserItem } from '../../models/UserItem';

const logger = createLogger('TestUserDB');

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const userItem: UserItem = JSON.parse(event.body);

  logger.info(`create request for ${JSON.stringify(userItem)} received!!`);

  //   const token: string = event.headers.Authorization.split(' ')[1];

  const createItemResponse = await new UserAccess().createUser(userItem);

  return {
    statusCode: createItemResponse.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: createItemResponse.results,
  };
};
