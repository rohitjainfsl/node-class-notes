// What is Node JS?
// Node is a runtime Environment
// Creator: Ryan Dahl took Chrome's V8 Engine, wrapped in a C++ library, libuv


// Modules: a part file/a piece of code which when fitted into another code, makes it complete
// System  Defined: fs, os, http....
// User Defined: 
// Third Party Modules: express, multer, helmet, cors, axios

// console.log("Hello World")


// There are 2 ways of importing/exporting modules: 
// - commonJS
// - ES6

// CommonJS: const Abhishek = require("Abhishek")
// ES6: import Abhishek from './Abhishek'


// CommonJS:  module.exports.Abhishek = function(){}
// ES6: export default Abhishek

import sum from './sum.js'
// import firstName from './firstName.js'
// import lastName from './lastName.js'

// console.log(firstName() + " " + lastName())

//What is process in Node?
// console.log(process.argv)

// console.log(sum(100,200))

console.log(sum(Number(process.argv[2]), Number(process.argv[3])))