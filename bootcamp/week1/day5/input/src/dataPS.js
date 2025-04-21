// read data until the user is done inputting it

const prompt = require("prompt-sync")();

const data = [];

while (true) {
  const value = prompt("Enter first value (or Q to quit): ");
  if (value == 'Q') {
    break;
  }
  data.push(value);
}

console.log(data)