const { Pool } = require("pg");
const credentials = new Pool({
user: "postgres",
password: "grEUmu0728!",
host: "localhost",
port: 5433,
database: "CultureExchange",
ssl: false
});

module.exports = credentials;