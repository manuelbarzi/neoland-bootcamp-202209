const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const databaseName = "my-first-db";

client.connect().then(() => {
  console.log("db connected on port 27017");

  const database = client.db(databaseName);

  const users = database.collection("users");

  users
    .findOne({ name: "pepito" })
    .then((user) => console.log(user))
    .then(() => client.close())
    .then(() => console.log("db desconnected"));
});
