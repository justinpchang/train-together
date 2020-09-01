### Train-Together Serverless Application Backend

The backend consists of following files and folders:

backend

.
+-- src/
| +-- lambda/
| | +-- auth/ => Folder that handles authorization
| | | +-- auth.ts => Handles the authorization with Auth0 to verifying the token
| | | +-- authUid.ts => Handles the authorization by email
| | +-- datalayer/
| | | +-- SessionDBAccess.ts => AWS Dynamodb database interface layer for Session table
| | | +-- UserdDBAccess.ts => AWS Dynamodb database interface layer for User table
| | +-- http/ => Folder that has AWS Lambda functions
| | | +-- CreateSession.ts =>
| | | +-- CreateSession.ts =>
| | | +-- CreateSession.ts =>
| | | +-- CreateSession.ts =>
| | | +-- CreateSession.ts =>
| | | +-- CreateSession.ts =>
| | | +-- CreateSession.ts =>
| | | +-- CreateSession.ts =>
| | | +-- CreateSession.ts =>
| | | +-- CreateSession.ts =>
| | | +-- CreateSession.ts =>

|-------src/lambda/http/Createuser.ts => Function to create user and store it in the databases

|-------src/lambda/datalayer/ => Folder that handles the datalayer

|-------src/lambda/datalayer/S3Access.ts => Accessing the S3 layer

|-------src/lambda/datalayer/RDSAccess.ts => Accessing the RDS layer

|-------src/lambda/datalayer/DynamoDBAccess.ts => Accessing the DynamoDB layer

|-------src/utils/

|-------src/utils/logger.ts => logger code
