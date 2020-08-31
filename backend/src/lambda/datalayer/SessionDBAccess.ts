import * as AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { SessionItem } from '../../models/SessionItem';
// import { SessionItem } from '../../models/SessionItem';
import { createLogger } from '../../utils/logger';
import { DataLayerResponse } from '../../models/DataLayerResponse';
import { SessionUpdateItem } from '../../models/SessionUpdateItem';

// import { UserUpdate } from '../models/UserUpdate';
// import { getGetSignedUrl } from '../datalayer/S3Access';

const logger = createLogger('UserdDBAccess');

export class SessionAccess {
  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    private readonly sessionTable = process.env.SESSION_TABLE
  ) {}

  async createSession(sessionItem: SessionItem): Promise<DataLayerResponse> {
    var resp;
    await this.docClient
      .put({
        TableName: this.sessionTable,
        Item: sessionItem,
      })
      .promise()
      .then(() => {
        logger.info('Successfully Created!');
        resp = {
          status: 201,
          results: JSON.stringify(sessionItem),
        };
      })
      .catch((err) => {
        logger.error(
          `Failed to create user!! Check with DynamoDB connection. \n ${err}`
        );
        resp = {
          status: 500,
          results: 'Error',
        };
      });
    return resp as DataLayerResponse;
  }

  async deleteSession(sessionId: string): Promise<DataLayerResponse> {
    var resp;
    if (await this.userItemExists(sessionId)) {
      logger.error('userId Not Found');
      resp = {
        status: 404,
        results: 'userId Not Found',
      };
    } else {
      await this.docClient
        .delete({
          TableName: this.sessionTable,
          Key: {
            sessionId: sessionId,
          },
        })
        .promise()
        .then(() => {
          logger.info('Successfully Deleted!');
          resp = {
            status: 200,
            results: `Successfully deleted ${sessionId}`,
          };
        })
        .catch((err) => {
          logger.error(
            `Failed to delete user!! Check with DynamoDB connection. \n ${err}`
          );
          resp = {
            status: 500,
            results: `Failed to delete user!! Check with DynamoDB connection. \n ${err}`,
          };
        });
    }
    return resp as DataLayerResponse;
  }

  async getSession(sessionId: string): Promise<DataLayerResponse> {
    var resp;
    if (await this.userItemExists(sessionId)) {
      logger.error('userId Not Found');
      resp = {
        status: 404,
        results: 'userId Not Found',
      };
    } else {
      const result = await this.docClient
        .get({
          TableName: this.sessionTable,
          Key: {
            userId: sessionId,
          },
        })
        .promise();
      resp = {
        status: 200,
        result: JSON.stringify(result),
      };
    }
    return resp as DataLayerResponse;
  }

  async updateSession(
    sessionId: string,
    updatedSession: SessionUpdateItem
  ): Promise<DataLayerResponse> {
    var resp;
    if (await this.userItemExists(sessionId)) {
      logger.error('userId Not Present');
      resp = {
        status: 404,
        results: `userId Not Present`,
      };
    } else {
      logger.info(`${JSON.stringify(updatedSession.title)}`);
      await this.docClient
        .update({
          TableName: this.sessionTable,
          Key: {
            userId: sessionId,
          },
          UpdateExpression:
            'set #session_title = :t, userId = :uid, eventDate = :ed, link = :l, description = :des, tags = :t',
          ExpressionAttributeValues: {
            ':t': updatedSession.title,
            ':uid': updatedSession.userId,
            ':ed': updatedSession.eventDate,
            ':des': updatedSession.description,
            ':l': updatedSession.link,
            ':t': updatedSession.tags,
          },
          ExpressionAttributeNames: {
            '#session_title': 'title',
          },
          ReturnValues: 'UPDATED_NEW',
        })
        .promise()
        .then((data) => {
          logger.info(`Successfully updated to ${JSON.stringify(data)}`);
          resp = {
            status: 200,
            results: JSON.stringify(data),
          };
        })
        .catch((err) => {
          logger.error(
            `Failed to update session!! Check with DynamoDB connection. \n ${err}`
          );
          resp = {
            status: 500,
            results: `Failed to update session!! Check with DynamoDB connection. \n ${err}`,
          };
        });
    }
    return resp as DataLayerResponse;
  }

  async addUserAttendee(sessionId: string): Promise<DataLayerResponse> {
    var resp;
    if (await this.sessionItemExists(sessionId)) {
      logger.error('userId Not Present');
      resp = {
        status: 404,
        results: `userId Not Present`,
      };
    } else {
      logger.info(`${JSON.stringify({ sessionId: sessionId })}`);
      await this.docClient
        .update({
          TableName: this.sessionTable,
          Key: {
            sessionId: sessionId,
          },
          ExpressionAttributeNames: {
            '#attendee': 'attendee',
          },
          UpdateExpression: 'add #attendee :num',
          ExpressionAttributeValues: {
            ':num': 1,
          },
          ReturnValues: 'NONE',
        })
        .promise()
        .then((data) => {
          logger.info(`Successfully updated to ${JSON.stringify(data)}`);
          resp = {
            status: 200,
            results: JSON.stringify(data),
          };
        })
        .catch((err) => {
          logger.error(
            `Failed to update user!! Check with DynamoDB connection. \n ${err}`
          );
          resp = {
            status: 500,
            results: `Failed to update user!! Check with DynamoDB connection. \n ${err}`,
          };
        });
    }
    return resp as DataLayerResponse;
  }

  async userItemExists(sessionId: string) {
    const result = await this.docClient
      .get({
        TableName: this.sessionTable,
        Key: {
          userId: sessionId,
        },
      })
      .promise();

    logger.info(`${JSON.stringify(result)}`);
    return JSON.stringify(result) === '{}';
  }

  /* Attaching user picture
    *
    async attachUserFile(
      todoId: string,
      fileName: string
    ): Promise<DataAccessResponse> {
      var resp;
      if (await this.todoItemExists(todoId)) {
        logger.error('todoId Not Present');
        resp = {
          status: 404,
          results: `logger.error('todoId Not Present')`,
        };
      } else {
        logger.info(`${JSON.stringify(fileName)}`);
        await this.docClient
          .update({
            TableName: this.todoTable,
            Key: {
              todoId: todoId,
            },
            UpdateExpression: 'set attachmentUrl = :aUrl',
            ExpressionAttributeValues: {
              ':aUrl': fileName,
            },
            ReturnValues: 'UPDATED_NEW',
          })
          .promise()
          .then((data) => {
            logger.info(`Successfully updated to ${JSON.stringify(data)}`);
            resp = {
              status: 200,
              results: JSON.stringify(data),
            };
          })
          .catch((err) => {
            logger.error(
              `Failed to update todo!! Check with DynamoDB connection. \n ${err}`
            );
            resp = {
              status: 500,
              results: `Failed to update todo!! Check with DynamoDB connection. \n ${err}`,
            };
          });
      }
      return resp as DataLayerResponse;
    }
  */
}

function createDynamoDBClient() {
  if (process.env.IS_OFFLINE) {
    logger.info('Creating a local DynamoDB instance');
    return new AWS.DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000',
    });
  }

  logger.info(`Connecting to DynamoDB`);
  return new AWS.DynamoDB.DocumentClient();
}
