const { EventEmitter } = require("events");
// const { readFile, readFileSync } = require("fs");

console.log("hi mom!");

console.log(global);
global.luckyNum = 10;
console.log(global.luckyNum);

console.log(process.platform);
console.log(process.env["LANG"]);

process.on("exit", () => {
  console.log("NOooooo!");
});

eventEmitter = new EventEmitter();
eventEmitter.on("lunch", () => {
  console.log(`yummy 😋`);
});

eventEmitter.emit("lunch");
eventEmitter.emit("lunch");

// Blocking
// const txt = readFileSync("./hello.txt", "utf-8");
// console.log(txt);

// Non-blocking
// readFile("./hello.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// });

// Promise-based
const { readFile } = require("fs").promises;

async function hello() {
  const txt = await readFile("./hello.txt", "utf-8");
  console.log(txt);
}
hello();

console.log("This should be done before the readfile!");

const myModule = require("./my-module");
console.log(myModule);
