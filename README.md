Dependencies (use npm list --depth=0 if you want EVERYTHING)
  Backend:
    body-parser
    cors
    dotenv
    express
    mongoose
  Frontend:
    axios
    prop-types
    react
    react-dom
    react-router-dom
    @eslint/js
    @vitejs/plugin-react
    eslint
    eslint-plugin-react
    eslint-plugin-react-hooks
    eslint-plugin-react-refresh
    globals
    vite

Image Creation
Backend:
../docker_part_1/backend> docker build -t student-api

Frontend:
../docker_part_1/frontend> docker build -t frontend-app .

Both:
../docker_part_1> docker-compose up --build -d

Start Up Procedure - Local ======================================
Install dependencies as required

Start MongoDB:
& "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath C:\data\db

Start backend:
PS C:\CPSY300_OS\Docker Assigment\docker_part_1\backend> node server.js

Start frontend:
PS C:\CPSY300_OS\Docker Assigment\docker_part_1\frontend> npm run dev

Shutdown Procedure - Local --------------------------------------
Stop frontend
Stop backend
Stop MongoDB: 
mongo
use admin
db.shutdownServer()


Start Up Procedure - Docker =====================================
Open Docker Desktop

Start Containers:
docker-compose up --build (first time)
docker-compose up (each subsequent time)
(verify with docker ps)

Shutdown Procedure - Docker -------------------------------------
Stop Docker:
docker-compose down   ||  docker-compose down --volumes --remove-orphans   for a not-graceful shutdown
(verify with docker ps)

Clean up:
docker system prune -a

Stop MongoDB:
mongo
use admin
db.shutdownServer()