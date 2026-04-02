require("dotenv").config();
const express = require('express');
const connectDb = require("./config/db");
const auth = require("./routes/auth.routes")

connectDb();
const app = express();

app.use(express.json());
app.use('/auth', auther);

module.exports = app;