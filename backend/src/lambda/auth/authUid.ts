import 'source-map-support/register';

import { CustomAuthorizerEvent, CustomAuthorizerResult } from 'aws-lambda';

import { createLogger } from '../../utils/logger';

import { UserAccess } from '../datalayer/UserdDBAcceess';

// import { parseUserId } from '../../auth/utils';

const logger = createLogger('InsertUserDB');

export const handler = async (
  event: CustomAuthorizerEvent
): Promise<CustomAuthorizerResult> => {
  //   const token: string = event.headers.Authorization.split(' ')[1];

  //   const userId = await parseUserId(token);

  const userId: string = event.authorizationToken;

  if ((await new UserAccess().getUser(userId)).status == 200) {
    logger.info('User was authorized', userId);
    return {
      principalId: userId,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: 'Allow',
            Resource: '*',
          },
        ],
      },
    };
  }
  return {
    principalId: 'user',
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Deny',
          Resource: '*',
        },
      ],
    },
  };
};
