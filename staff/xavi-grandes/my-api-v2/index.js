require("dotenv").config();

const express = require("express");

const authPost = require("./handlers/authPost");
const registerUserHandler = require('./handlers/registerUserHandler')
const searchGet = require("./handlers/searchGet");

const jsonBodyParser = require("./utils/jsonBodyParser");
const cors = require("./utils/cors")

const api = express();

api.use(cors)

api.post("/auth", jsonBodyParser, authPost);
api.post('/users', jsonBodyParser, registerUserHandler)

api.get("/search", searchGet);

const { PORT } = process.env;

api.listen(PORT, () => console.log(`server listening on port ${PORT}`));