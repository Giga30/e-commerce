const express = require("express");

const routes = require("./routes/users.route");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use("/api/users", routes);

app.use(errorHandler);

module.exports = app;