import * as AWS from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

import { UserItem } from '../../models/UserItem';
// import { SessionItem } from '../../models/SessionItem';
import { createLogger } from '../../utils/logger';
import { DataLayerResponse } from '../../models/DataLayerResponse';
import { UserUpdateItem } from '../../models/UserUpdate';

// import { UserUpdate } from '../models/UserUpdate';
// import { getGetSignedUrl } from '../datalayer/S3Access';

const logger = createLogger('UserdDBAccess');

export class UserAccess {
  constructor(
    private readonly docClient: DocumentClient = createDynamoDBClient(),
    private readonly userTable = process.env.USER_TABLE // private readonly sessionTable = process.env.SESSION_TABLE
  ) {}

  async createUser(userItem: UserItem): Promise<DataLayerResponse> {
    var resp;
    await this.docClient
      .put({
        TableName: this.userTable,
        Item: userItem,
      })
      .promise()
      .then(() => {
        logger.info('Successfully Created!');
        resp = {
          status: 201,
          results: JSON.stringify(userItem),
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

  async deleteUser(userId: string): Promise<DataLayerResponse> {
    var resp;
    if (await this.userItemExists(userId)) {
      logger.error('userId Not Found');
      resp = {
        status: 404,
        results: 'userId Not Found',
      };
    } else {
      await this.docClient
        .delete({
          TableName: this.userTable,
          Key: {
            userId: userId,
          },
        })
        .promise()
        .then(() => {
          logger.info('Successfully Deleted!');
          resp = {
            status: 200,
            results: `Successfully deleted ${userId}`,
          };
        })
        .catch((err) => {
          logger.error(
            `Failed to delete todo!! Check with DynamoDB connection. \n ${err}`
          );
          resp = {
            status: 500,
            results: `Failed to delete todo!! Check with DynamoDB connection. \n ${err}`,
          };
        });
    }
    return resp as DataLayerResponse;
  }

  async updateUser(
    userId: string,
    updatedUser: UserUpdateItem
  ): Promise<DataLayerResponse> {
    var resp;
    if (await this.userItemExists(userId)) {
      logger.error('todoId Not Present');
      resp = {
        status: 404,
        results: `todoId Not Present`,
      };
    } else {
      logger.info(`${JSON.stringify(updatedUser.name)}`);
      await this.docClient
        .update({
          TableName: this.userTable,
          Key: {
            userId: userId,
          },
          UpdateExpression:
            'set #user_name = :n, email = :em, dob = :dob, interests = :i',
          ExpressionAttributeValues: {
            ':n': updatedUser.name,
            ':em': updatedUser.email,
            ':a': updatedUser.dob,
            ':i': updatedUser.interests,
          },
          ExpressionAttributeNames: {
            '#user_name': 'name',
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

  async addUserFollowing(
    userId: string,
    trainerId: string
  ): Promise<DataLayerResponse> {
    var resp;
    if (await this.userItemExists(userId)) {
      logger.error('todoId Not Present');
      resp = {
        status: 404,
        results: `todoId Not Present`,
      };
    } else {
      logger.info(`${JSON.stringify({ user: userId, trainer: trainerId })}`);
      await this.docClient
        .update({
          TableName: this.userTable,
          Key: {
            userId: userId,
          },
          UpdateExpression:
            'set followingList = list_append(followingList, :fuId)',
          ExpressionAttributeValues: {
            ':fuId': trainerId,
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

  async userItemExists(userId: string) {
    const result = await this.docClient
      .get({
        TableName: this.userTable,
        Key: {
          userId: userId,
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
