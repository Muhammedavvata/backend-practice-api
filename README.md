\# Backend Practice API



A small Node.js + Express.js backend practice project built to improve Junior Backend Developer skills.



The goal of this project is to understand core backend concepts through simple and practical API examples, including routes, controllers, middleware, request/response handling, and HTTP status codes.



\---



\## Technologies Used



\- Node.js

\- Express.js

\- JavaScript

\- REST API

\- Postman

\- Git \& GitHub



\---



\## Project Structure



backend-practice-api/

\- controllers/

&#x20; - task.controller.js

&#x20; - request.controller.js

&#x20; - status.controller.js

\- routes/

&#x20; - task.routes.js

&#x20; - request.routes.js

&#x20; - status.routes.js

\- middleware/

&#x20; - requestLogger.js

\- server.js

\- package.json

\- README.md



\---



\## What This Project Covers



\### Routes and Controllers



Routes define the API endpoints.

Controllers contain the request logic and send responses.



\### Middleware



A custom request logger middleware logs each incoming request in the terminal.



Example:



GET /api/tasks

POST /api/request-demo/body



\### Request \& Response Demo



Base route:



/api/request-demo



Endpoints:



GET /api/request-demo/params/:id

GET /api/request-demo/query?status=active\&page=1

POST /api/request-demo/body

GET /api/request-demo/headers



Covered concepts:



\- req.params

\- req.query

\- req.body

\- req.headers

\- res.status()

\- res.json()



\### Status Codes Demo



Base route:



/api/status-demo



Endpoints:



GET /api/status-demo/ok

POST /api/status-demo/created

POST /api/status-demo/bad-request

GET /api/status-demo/unauthorized

GET /api/status-demo/forbidden

GET /api/status-demo/not-found

GET /api/status-demo/server-error



Covered status codes:



\- 200 OK

\- 201 Created

\- 400 Bad Request

\- 401 Unauthorized

\- 403 Forbidden

\- 404 Not Found

\- 500 Internal Server Error



\---

\### Error Handling Demo



This section demonstrates basic backend error handling in Express.js.



Base route:



/api/error-demo



Endpoints:



GET /api/error-demo/safe  

POST /api/error-demo/validation  

GET /api/error-demo/not-found  

GET /api/error-demo/server-error  

GET /api/error-demo/async-error



Covered concepts:



\- Direct validation error handling

\- Centralized error handler middleware

\- next(error)

\- try/catch with async code

\- 400 Bad Request

\- 404 Not Found

\- 500 Internal Server Error



The centralized error handler is placed after all routes in server.js so it can catch errors passed using next(error).



\---



\## How to Run the Project



Install dependencies:



npm install



Run the development server:



npm run dev



Server will run on:



http://localhost:5000



\---



\## Learning Goal



This project is part of my Junior Backend Developer Interview Readiness practice.



The focus is not only writing code, but understanding:



\- What happens in the backend

\- How requests reach routes and controllers

\- How middleware works

\- How to read request data

\- How to send proper responses

\- How to use correct HTTP status codes



\---



\## Current Status



Completed practice topics:



\- Node.js basics

\- Express.js basics

\- REST API basics

\- Routes \& Controllers

\- Middleware

\- Request \& Response

\- HTTP Status Codes

\- Error Handling

