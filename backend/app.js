const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors({ origin: true, credentials: true }))

const test = require("./routes/testRoute")

app.use(test)

module.exports = app