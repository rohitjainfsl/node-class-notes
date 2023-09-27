import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

let students = [
  { id: 101, name: "Rajat", phone: 1234512345, age: 26 },
  { id: 102, name: "Avinash", phone: 1234512346, age: 25 },
  { id: 103, name: "Omender", phone: 1234512347, age: 24 },
  { id: 104, name: "Risabh", phone: 1234512348, age: 44 },
];

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));

app.get("/", (req, res) => {
  res.json(students);
});

app.post("/new", (req, res) => {
  const newStudent = req.body;
  const newid = students[students.length - 1].id + 1;
  newStudent.id = newid;
  students.push(newStudent);
  res.json(students);
});

app.delete("/delete/:id", (req, res) => {
  const idToDelete = Number(req.url.split("delete/")[1]);
  students = students.filter((student) => {
    return student.id !== idToDelete;
  });
  res.json(students);
});

app.listen(port, () => console.log("Server started at port " + port));
