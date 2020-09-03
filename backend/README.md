### ZOOMFIT Serverless Application Backend APIs

**Tech Stack:** TypeScript, AWS Lambda Functions, API GateWays & DynamoDB

#### API ENDPOINTS

**Login**

POST {apiId}/zoomfit/v1/user/login/ (return 403 on no user -> registration -> create user)

req: {

    email: <string>

}
res: {

    userID: <string>

}

**User API**

GET {apiId}/zoomfit/v1/user/ (error if not onboarded)

req: {

    header: userId

}

res: {

    userId: int

    name: string,

    email: string,

    age: string,

    interests: array[string]

    History?: array[string]->sessionid’s,

    followers: int,

    following: int,

    sessionsAttended: int

}

Create user:

POST {apiId}/zoomfit/v1/user/

req: {

    name: string,

    email: string,

    age: string,

    interests: array[string]

    picture: .jpg/png? string url

}

To get user sessions:

GET {apiId}/zoomfit/v1/user/sessions/

req: {

    header: userId

}

Res : [List of session objects]

To register a session:

POST {apiId}/zoomfit/v1/user/register/

req: {

    header: userId

    body: {

            sessionId: string

        }

}

Res:{
}

To unregister a session:

POST {apiId}/zoomfit/v1/user/unregister/

req: {

    header: userId

    body: {

            sessionId: string

        }

}

Session API

Global feed
GET {apiId}/zoomfit/v1/session/all LIMIT 20

req: { }

res: [Sessions]

Get single session info

GET {apiId}/zoomfit/v1/session/

req: {

    sessionId: string

}

res: {

    class Object

}

Create a new session:

POST {apiId}/zoomfit/v1/session/

req: {

    header: {userId},

    body: {

            title: string,

            time: datetime,

            description: string,

            instructor: userId,

            slots: int,

            link: string,

            tags: [string],

}

res: {

        classId: string

}

Data Schema:

NOTE: The ? after the name of the column denotes is not a mandate column.

DynamoDB Users table:

userId: string;

createdAt: string;

name: string;

email: string;

age: string;

interests: Array<string>;

followed?: number;

following?: number;

attachmentUrl?: string;

sessionsAttended?: number;

sessionsCreated?: number;

history: Array<sessionId>

DynamoDB Session table:

sessionId: string;

title: string;

userId: string;

createdAt: string;

eventDate: String;

description: string;

attachmetUrl: string;

link: string;

slots: int; -> how many are remaining/open

tags: Array<string>;
