// import fs from "fs";

// console.log(fs)

// readFile, writeFile, appendFile

// fs.readFile("data.txt", (err, data) => {
//   if (err) console.log(err);
//   else {
//     console.log(data.toString());
//   }
// });

// const data = fs.readFileSync("data.txt")

// console.log(data.toString())


// console.log("Hello")

// const data = "This data is written with the help of Node";
// fs.writeFile("newData.txt", data, (err) => {
//   if (err) console.log(err);
// });

// fs.writeFile("newData.txt", "Overwritten", (err) => {
//   if (err) console.log(err);
// });

// fs.appendFile("newData.txt", "Overwritten again", (err) => {
//     if (err) console.log(err);
//   });



// ASCII




//Node does async programming via 2 methods, callbacks and promises

import fs from 'fs/promises'

// fs.readFile("data.txt")
// .then((data) => {console.log(data.toString())})
// .catch((err) => {console.log(err)})


// async / await

const data = await fs.readFile("data.txt")
console.log(data.toString())

//readLine


