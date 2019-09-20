import express from "express";
import http from "http";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config";
import initializeRoutes from "./routes";
import passport from "passport";
import "./config/passport";

if (!process.env.JWT_SECRET) {
  const err = new Error("No JWT_SECRET in env variable");
  console.error(err);
}

const app = express();

mongoose
  .connect(config.mongoose.uri, {
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch(err => console.error(err));

mongoose.Promise = require("bluebird");

/*
 |--------------------------------------------------------------------------
 | App Setup
 |--------------------------------------------------------------------------
 */

app.use(
  cors({
    origin: ["https://www.amazingandyyy.com", "http://localhost:3000"]
  })
);
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

/*
 |--------------------------------------------------------------------------
 | Initialize routes
 |--------------------------------------------------------------------------
 */

initializeRoutes(app);

/*
 |--------------------------------------------------------------------------
 | error
 |--------------------------------------------------------------------------
 */

app.use((err, req, res, next) => {
  console.log("Error:", err.message);
  res.status(422).json(err.message);
});

/*
 |--------------------------------------------------------------------------
 | Server Setup
 |--------------------------------------------------------------------------
 */

const port = process.env.PORT || 8000;
http.createServer(app).listen(port, () => {
  console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`);
});
