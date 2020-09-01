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

|-------src/utils/

|-------src/utils/logger.ts => logger code
