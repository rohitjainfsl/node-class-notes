import express from "express";
import StudentModel from "./studentModel.js";
import { db } from "./index.js";
import multer from "multer";
import path from "path";

const studentRouter = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: function (req, file, callback) {
    // Use the student's name as the filename and keep the original extension
    const ext = path.extname(file.originalname);
    const filename = req.body.name + ext;
    callback(null, filename);
  },
})
const upload = multer({ storage: storage });

studentRouter.post(
  "/new",
  upload.single("profilePicture"),
  async (req, res) => {
    // const name = req.body.name
    // const age = req.body.age
    // const phone = req.body.phone
    const { name, age, phone } = req.body;

    // Get the uploaded file information
    const profilePicture = req.file;

    db.collection("studentRecords")
      .insertOne({ name, age, phone, profilePicture })
      .then((result) => {
        res.status(201).send("User inserted successfully");
        // console.log("Success");
      })
      .catch((err) => {
        // console.error("Error inserting user:", err);
        res.status(500).send("Internal Server Error");
      });

    // const newStudent = new StudentModel({
    //   name: name,
    //   age: age,
    //   phone: phone,
    // });

    // const result = await newStudent.save();

    // res.status(201).json(result);
  }
);

// studentRouter.delete("/delete/:id", async (req, res) => {
//   const idToDelete = req.url.split("delete/")[1];
//   const result = await StudentModel.deleteOne({ _id: idToDelete });
//   if (result.deletedCount === 1) res.status(200).send("Deleted");
//   else res.status(400).send("ID not found");
// });

export default studentRouter;
