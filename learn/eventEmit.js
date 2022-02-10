// const mission = process.argv[2];

// if (mission === "learn") {
//   console.log("Time to write some Node Code!");
// } else {
//   console.log(`Is ${mission} really more fun?`);
// }

// setTimeout(() => console.log("🐢"), 51);
// setTimeout(() => console.log("🐇"), 50);

const EventEmitter = require("events");
const celebrity = new EventEmitter();

celebrity.on("race win", () => {
  console.log("Congrats! you win!!");
});

celebrity.on("race lost", () => {
  console.log("should have been me!!\n");
});

console.log("WIN! :)");
celebrity.emit("race win");
console.log("Lose :(");
celebrity.emit("race lost");

celebrity.on("race", (result) => {
  if (result === "win") {
    console.log("Congrats! you win!!");
  }
});

celebrity.on("race", (result) => {
  if (result === "lose") {
    console.log("should have been me!!\n");
  }
});

console.log("WIN! :)");
celebrity.emit("race", "win");
console.log("Lose :(");
celebrity.emit("race", "lose");

process.on("exit", (code) => {
  console.log("Exit code: ", code);
});
