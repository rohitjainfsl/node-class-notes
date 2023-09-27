import readline from "readline";

// console.log(readline)
// console.log(process.argv[1])

const inter = readline.createInterface(process.stdin, process.stdout);

// inter.question("What is your name?\n", (answer) => {
//     inter.write(answer);
//     inter.close();
// })

// inter.question("Enter space separated numbers\n", (numbers) => {
//   const numArray = numbers.split(" ");
//   numArray.reduce((prev, curr) => {
//     return prev * curr;
//   }, numArray[0]);
// });

// inter.question("Enter two names\n", (names) => {
//   const name = names.split(" ");
// //   const arr = name[0].length + name[1].length;

//   inter.write(name[0].length - name[1].length);
//   console.log(name[0].length - name[1].length);
//   inter.close();
// });

inter.question("Enter two names\n", (names) => {
  let sum = 0;
  const nameArr = names.split(" ");
  for (let i in nameArr) {
    sum = sum + nameArr[i].length;
  }
  inter.write(sum.toString());
});




