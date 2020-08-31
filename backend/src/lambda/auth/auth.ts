import { CustomAuthorizerEvent, CustomAuthorizerResult } from 'aws-lambda';
import 'source-map-support/register';

import { verify } from 'jsonwebtoken'; //
import { createLogger } from '../../utils/logger';
import { JwtPayload } from '../../auth/JwtPayload';

const logger = createLogger('auth');
const cert = `-----BEGIN CERTIFICATE-----
MIIDDTCCAfWgAwIBAgIJUc2REfbV0eUyMA0GCSqGSIb3DQEBCwUAMCQxIjAgBgNV
BAMTGWRldi0zNnEtNGg3OS51cy5hdXRoMC5jb20wHhcNMjAwODMxMDMxODQ5WhcN
MzQwNTEwMDMxODQ5WjAkMSIwIAYDVQQDExlkZXYtMzZxLTRoNzkudXMuYXV0aDAu
Y29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuX9iaIH0BqV03fDI
bAnOJJ7BCm28HJ3qPK+7urrKv0RShNjfZhKUlam9Rb4VtwPQc+OzM51wSVTc8iv1
yn7rDEdiEVDBU16Dv6E1EIafVoXrtyLLjkDWuBGueulYtnQOI1/GJRJ7Llfguyyf
qAbdpaQVxrfQKbJae4aWr3I47+O7fQdlZJOd711MqnsmeENiKEqbw/ZqPfswd5Vl
8E/6RSApeh/ggh764N4Pxfu/1v7xllwbtnhRO2MYTAQkU3BjDq/UKM0814Vf4Bzg
MnG6RnM3zCkDpqoaUNEfPTvpcGCcAmw8OnQuCtm+NIzT1j7OVqEPVhK+z9kjSLA8
Iy65QwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTpgOeSjDj+
IoqmiCl0Vb6Mb661uDAOBgNVHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEB
ALiVWK4wEn0NVATLLxWN7kYeOWtk4sgzizyiIQNU741o9fzuUE3wQdwnhbZKL2te
1TlOW1fRHVreZ5q3zPTSNcapCHfC7uJwxH2J18VIXgEUg8kq5BHVWSzs4IAoaA7q
lFY9bXafqkUCzl37zyryr7L1Zp6+Ofvqxj8XC66owKUB9EMNlNDt7yTdfWMQ0ZvU
SXjLErQMDYmEXAl3llrhYm/9Tl9VEt6jPPYNXCxBxuOjitsIvl7svBjisbhFolyD
KRcmI9Me1BkP15+AAvSdLyy6wPf76UNyeSu9f+Y4mlKQN6MRK4nSryDz2a4P3Bc4
bAArXY1HDQDBPZRuTtPTSnU=
-----END CERTIFICATE-----`;

export const handler = async (
  event: CustomAuthorizerEvent
): Promise<CustomAuthorizerResult> => {
  logger.info('Authorizing a user', event.authorizationToken);
  try {
    const jwtToken = await verifyToken(event.authorizationToken);
    logger.info('User was authorized', jwtToken);

    return {
      principalId: jwtToken.sub,
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
  } catch (e) {
    logger.error('User not authorized', { error: e.message });

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
  }
};

async function verifyToken(authHeader: string): Promise<JwtPayload> {
  const token = getToken(authHeader);

  return verify(token, cert, { algorithms: ['RS256'] }) as JwtPayload;
}

function getToken(authHeader: string): string {
  if (!authHeader) throw new Error('No authentication header');

  if (!authHeader.toLowerCase().startsWith('bearer '))
    throw new Error('Invalid authentication header');

  const split = authHeader.split(' ');
  const token = split[1];

  return token;
}
