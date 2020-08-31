### Train-Together Serverless Application Backend

The backend consists of following files and folders:

backend

|-------src/

|-------src/lambda/

|-------src/lambda/auth/ => Folder that handles authorization

|-------src/lambda/auth/auth0Authorizer.ts => Handles the authorization like verifying the token

|-------src/lambda/http/ => Folder that has functions to handle

|-------src/lambda/http/Createuser.ts => Function to create user and store it in the databases

|-------src/lambda/datalayer/ => Folder that handles the datalayer

|-------src/lambda/datalayer/S3Access.ts => Accessing the S3 layer

|-------src/lambda/datalayer/RDSAccess.ts => Accessing the RDS layer

|-------src/lambda/datalayer/DynamoDBAccess.ts => Accessing the DynamoDB layer

|-------src/utils/

|-------src/utils/logger.ts => logger code
