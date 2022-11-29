require("dotenv").config();

const express = require("express");

const { MongoClient } = require("mongodb");
const context = require("./logic/context");

const authenticateUserHandler = require("./handlers/authenticateUserHandler");
const registerUserHandler = require("./handlers/registerUserHandler");
const retrieveUserHandler = require("./handlers/retrieveUserHandler");
const createPostHandler = require("./handlers/createPostHandler");
const retrievePublicPostsHandler = require("./handlers/retrievePublicPostsHandler");
const retrievePostHandler = require("./handlers/retrievePostHandler");
const updatePostHandler = require("./handlers/updatePostHandler");
const deletePostHandler = require("./handlers/deletePostHandler");

const jsonBodyParser = require("./utils/jsonBodyParser");
const cors = require("./utils/cors");

const { PORT, MONGO_URL } = process.env;

const client = new MongoClient(MONGO_URL);

client
  .connect()
  .then((connection) => {
    console.log("connected to DB on url " + MONGO_URL);

    context.db = connection.db("test");

    const api = express();

    api.use(cors);

    api.post("/users/auth", jsonBodyParser, authenticateUserHandler);
    api.post("/users", jsonBodyParser, registerUserHandler);
    api.get("/users", retrieveUserHandler);

    api.post("/posts", jsonBodyParser, createPostHandler);
    api.get("/posts/public", retrievePublicPostsHandler);
    api.get("/posts/:postId", retrievePostHandler);
    api.patch("/posts/:postId", jsonBodyParser, updatePostHandler);
    api.delete("/posts/:postId", deletePostHandler);

    api.listen(PORT, () => console.log(`server listening on port ${PORT}`));
  })
  .catch((error) => console.log(error));
