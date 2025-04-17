//Functions

/* ****Write a function and call it**** */
console.log("------ Functions ------");

function sayHello() {
    console.log("Hello world")
}
sayHello();

function sayWord(word) {
    console.log(word)
}
sayWord("Hello");
sayWord("world");
console.log(sayWord("again"))

//Writing and Invoking a Function with "console.log()"
function printMV(){
    console.log("Multiverse");
}

printMV(); 

function returnMV() {
    return "Multiverse"
}
returnMV();
console.log(returnMV());

// use the value in other places
console.log(`This is a ${returnMV()} workshop`);
const mv = returnMV();
const bool = mv.includes("verse")
console.log(bool)

console.log(returnMV)

/* **** Recognize Errors and Debug your code **** */
console.log("------ Debugging ------");

/* **Incorrect Variable Syntax Error Examples and Resolutions** */
console.log("Syntax Errors:");

//Syntax Error 1: Misspelled Keyword for Declaring a Variable
// le name = "Multiverse"; 
let name = "Multiverse"

//Syntax Error 2: Incorrect Assignment Operator
// let bootcamp -> "Multiverse";
let bootcamp = "Multiverse";

//Syntax Error 4: Incorrect use of the Boolean Data Type
//let isBootcamp = True;
let isBootcamp = true;

/* **Reference Error Examples and Resolutions** */
console.log("Reference Errors:");

//Reference Error 1: Variable Doesn't Exist never Initialized
// console.log(someVariable)
let someVariable;
console.log(someVariable);

//Reference Error 2: Calling a Misspelled Variable Name
//Step 1: Init a Variable
let num = 9;
//Step 2: Refer to variable name spelled incorrectly 
// console.log(nums)
console.log(num)

/* **Type Error Examples and Resolutions** */
console.log("Type Errors:");

// Type Error 1: Trying to change the value of a Constant Variable
//Step 1: Initialize a Constant
const number = 10;
//Step 2: Try to re-assign the value of the constant 
// number = 12;
const number2 = 12;

//Type Error 2: Applying a method (function) of one data type to another data type
//Trying to apply the .includes method to a number
//Step 1: Init a number variable
let nums = 90;
//Step 2: Apply the .includes method to that variable
// console.log(nums.includes("0"));
// To fix, make a new string variable with the value of nums (or coerce in the previous one)
numsString = String(nums);
console.log(numsString.includes("0"));
