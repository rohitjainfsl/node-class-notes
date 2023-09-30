import express from "express";
import StudentModel from "./studentModel.js";

const studentRouter = express.Router();

studentRouter.get("/", async (req, res) => {
  const existingStudents = await StudentModel.find({});
  res.json(existingStudents);
});

studentRouter.post("/new", async (req, res) => {
  // const name = req.body.name
  // const age = req.body.age
  // const phone = req.body.phone
  const { name, age, phone } = req.body;

  const newStudent = new StudentModel({
    name: name,
    age: age,
    phone: phone,
  });

  const result = await newStudent.save();

  res.status(201).json(result);
});

studentRouter.delete("/delete/:id", async (req, res) => {
  const idToDelete = req.url.split("delete/")[1];
  const result = await StudentModel.deleteOne({ _id: idToDelete });
  if (result.deletedCount === 1) res.status(200).send("Deleted");
  else res.status(400).send("ID not found");
});

export default studentRouter;
