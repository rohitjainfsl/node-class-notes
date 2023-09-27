import fs from "fs";

// writeToFile(fileName, data)
// readFromFile(fileName)
// appendToFile(fileName, data)

export function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else console.log("Success");
  });
}

export function readFromFile(fileName) {
  fs.readFile(fileName, (err, data) => {
    if (err) console.log("File could not be read: " + err);
    else {
      console.log("Data from file: " + data.toString());
    }
  });
}

export function appendToFile(fileName, data) {
  fs.appendFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else console.log("Success");
  });
}
