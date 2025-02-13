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

Start Up Procedure - Local --------------------------------------
Start MongoDB:
& "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath C:\data\db

Start backend:
PS C:\CPSY300_OS\Docker Assigment\docker_part_1\backend> node server.js

Start frontend:
PS C:\CPSY300_OS\Docker Assigment\docker_part_1\frontend> npm run dev


Start Up Procedure - Docker -------------------------------------
To start MongoDB:
& "C:\Program Files\MongoDB\Server\8.0\bin\mongod.exe" --dbpath C:\data\db
