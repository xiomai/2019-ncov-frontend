const express = require("express");
const morgan = require("morgan");
const compression = require("compression");

if (process.env.NODE_ENV === "development") require("dotenv").config();

const apiRoutes = require("./api");

const app = express();

app.use(compression());

if (process.env.NODE_ENV === "development") app.use(morgan("combined"));

app.use(apiRoutes);

app.get("*", (_, res) => res.send("Page Not found"));

export default [
  {
    path: "/api",
    handler: app
  }
];
