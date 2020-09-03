import 'source-map-support/register';
import * as uuid from 'uuid';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';

import { createLogger } from '../../utils/logger';

import { SessionItem } from '../../models/SessionItem';
import { SessionAccess } from '../datalayer/SessionDBAccess';

// import { parseUserId } from '../../auth/utils';
// import { CreateUserReq } from '../../models/CreateUserReq';

const logger = createLogger('InserSessionDB');

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  logger.info(`create request for ${JSON.stringify(event.body)} received!!`);

  //   const token: string = event.headers.Authorization.split(' ')[1];

  //   const userId = await parseUserId(token);

  //   const userdetails: CreateUserReq = JSON.parse(event.body);
  //userId: userId,

  const sessiondetails: SessionItem = JSON.parse(event.body);

  const sessionId = uuid.v4();

  const ItemResponse = await new SessionAccess().createSession({
    sessionId,
    ...sessiondetails,
    link: 'https://web.zoomfit.com/session/' + sessionId,
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
