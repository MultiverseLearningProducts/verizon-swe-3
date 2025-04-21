// read data until the user is done inputting it
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];
getData();

function getData() {
  readline.question("Enter first value (or Q to quit): ", (value) => {
    if (value == "Q") {
      console.log(data);
      return readline.close();
    } else {
      data.push(value);
      getData();
    }
  });
}