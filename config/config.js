require("dotenv").config();
module.exports = {
  MongoURI: "mongodb+srv://reforestration:reforestration@cluster0-2dt07.mongodb.net/test?retryWrites=true&w=majority",
  development: {
    username: "root",
    password: process.env.DB_PASSWORD,
    database: "reforestration",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "reforestration",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};