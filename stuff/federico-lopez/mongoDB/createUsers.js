const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const databaseName = "my-first-db";

client.connect().then(() => {
  console.log("db connected on port 27017");

  const database = client.db(databaseName);

  const users = database.collection("users");

  users
    .insertMany([
      {
        name: "pepito",
        age: 30,
      },
      {
        name: "wendy",
        age: 31,
      },
      {
        name: "peter",
        age: 158,
      },
      { name: "pepito", age: 40 },
    ])
    .then(() => users.find({}).toArray())
    .then((usersFound) => console.log(usersFound))
    .then(() => client.close())
    .then(() => console.log("db desconnected"));
});
