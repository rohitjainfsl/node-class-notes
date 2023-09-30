import express from "express";
import cors from "cors";
import studentRouter from "./studentRouter.js";
import connection from "./connection.js";

const app = express();
const port = 4000;

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.use("/student", studentRouter);

connection.then(() =>
  app.listen(port, () => console.log("Server started at port " + port))
).catch((err) => console.log("DB ERROR: "+ err))