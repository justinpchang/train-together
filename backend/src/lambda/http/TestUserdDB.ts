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

  logger.info(`create request for ${JSON.stringify(event.body)} received!!`);

  //   const token: string = event.headers.Authorization.split(' ')[1];

  const ItemResponse = await new UserAccess().createUser(userItem);

  // const userItem = JSON.parse(event.body);
  // const ItemResponse = await new UserAccess().deleteUser(userItem.userId);

  return {
    statusCode: ItemResponse.status,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: ItemResponse.results,
  };
};
