/* **** Use Comparison Operators to compare values  **** */
// comparison operators take values of different types, and return true or false

console.log("--------- comparison operators ---------");

//Comparison Operator 1: Greater Than
let greaterThan1 = 9 > 2; //Results in True
let greaterThan2 = 23 > 43 //Results in False
console.log("greaterThan:", greaterThan1, greaterThan2)

//Comparison Operator 2: Less Than
let lessThan1 = 12 < 4; //Results in False
let lessThan2 = 8 < 10; //Results in True
console.log("lessThan:", lessThan1, lessThan2)

//Comparison Operator 3: Loosely Equals 
let looseEqual1 = 3 == "3"; //Results in True
let looseEqual2 = 8 == 4; //Results in False
console.log("looseEqual:", looseEqual1, looseEqual2)

//Comparison Operator 4: Strictly Equals 
let strictEqual1 = 3 === "3"; //Results in False
let strictEqual2 = 8 === 8; //Results in True
console.log("strictEqual:", strictEqual1, strictEqual2)

//Comparison Operator 5: Greater than or Loosely Equal To 
let gte1 = 9 >= "9" //Results in True
let gte2 = 23 >= 15 //Results in True
let gte3 = 24 >= 31 //Results in False
let gte4 = 30 >= "90" //results in False
console.log("gte:", gte1, gte2, gte3, gte4)

//Comparison Operator 6: Less than or Loosely Equal To
let lte1 = 9 <= "9"; //Results in True
let lte2 = 8 <= 12 ; //Results in True
let lte3 = 7 <= "4" //Results in False
let lte4 = 12 <= 9 //Results in False
console.log("lte:", lte1, lte2, lte3, lte4)

//Comparison Operator 7: Not Equal To
let notEqual1 = 3 != "3"; //Results in False
let notEqual2 = 3 !== "3"; //Results in True
let notEqual3 = 8 != 4; //Results in True
console.log("notEqual:", notEqual1, notEqual2, notEqual3)  

// 1 < x < 10 DOESN'T WORK
let x = 6;
let between = (1 < x) && (x < 10); // 1 < x < 10
console.log("between:", between)  

/* **** Use Logical Operators to Evaluate Boolean Expressions  **** */
//Logical operators take boolean values and return a boolean value

console.log("--------- logical operators ---------");

//Logical Operator 1: The AND Operator (&&)
let and1 = true && false; //Results in False
let and2 = true && true; //Resuts in True
let and3 = false && true; //Results in False
let and4 = false && false; //Results in False
console.log("and:", and1, and2, and3, and4)

//Logical Operator 2: The OR Operator (||)
let or1 = true || false; //Results in True
let or2 = true || true; //Results in True
let or3 = false || true; //Results in True
let or4 = false || false; //Results in False
console.log("or:", or1, or2, or3, or4)

//Logical Operator 3: The NOT Operator (!)
let not1 = !true; //Results in False
let not2 = !false; //Results in True
console.log("not:", not1, not2)

/* **** Apply Control Flow using If, Else If, and Else Statements  **** */
console.log("--------- control flow ---------");

/*Control Flow with IF Statements*/

//If Statement 1: Using Variables, Numbers, and Comparison Operators
let num = 25;

if(num >= 21){
    console.log("Great, let's go to a bar!")
}

//If Statement 2: Using Variables, Strings, and Includes String Method
let word = "Software Engineer";

if(word.includes("Software")){
    console.log("I love Software! Software is Amazing!");
}

//If Statement 4: Using Logical Operator AND (&&)
let word2 = "Learn Coding";

if(9 > 7 && word2.includes("Learn")){
    console.log("Cool! We Passed the Logical Operator AND Expression to Be Here.");
}

//If Statement 5: Using Logical Operator OR (||)
let word3 = "Listen to Music";

if(word3.includes("Music") || 9 < 8){
    console.log("Cool! We passed the Logical Operator OR Expression to Be Here.")
}

//If Statement 6: Using Logical Operator NOT (!)
let word4 = "You can't see me";

if(!word4.includes("never")){
    console.log("That word isn't in the String!");
}

/*Control Flow with IF and Else Statements*/

//If and Else Statement 1 Using Variables, Numbers, and Comparison Operators
let number = 5;

if(number >= 21){
    console.log("Great, let's go to a bar!")
}else{
    console.log("Let's not go to the bar")
}

/*Control Flow with IF, Else IF, Else Statements*/

//If Else IF Else Statement : Using Logical Operator AND (&&) and OR (||)
let words2 = "Learn Coding";

if(9 > 7 && !words2.includes("Learn")){
    console.log("Cool! We Passed the Logical Operator AND Expression to Be Here.");
}else if(true || false){
    console.log("Cool, we made it to the Else IF block because the first IF did not pass, but this one did before going to the Else");
}else{
    console.log("If we are here, it's because nothing else passed. The IF or the Else IF");
}


// BONUS: short circuit evaluation
console.log("--------- short circuit evaluation ---------");
false || console.log("This will print because the first operand is false and the second operand is evaluated")
true || console.log("This will not print because the first operand is true and the second operand is not evaluated")
false && console.log("This will not print because the first operand is false and the second operand is not evaluated")
true && console.log("This will print because the first operand is true and the second operand is evaluated")

// how might we use this IRL?
// make sure an expression is valid before testing it, e.g.
// if str && str.includes("word")

// BONUS: Ternaries are conditional expressions, not statements.  
// They can be used in places where you would use a value, like in an assignment or a return statement.
console.log("--------- Ternaries ---------");

// let answer;
// if (9 > 7) {
//     answer = "Greater"
// } else {
//     answer = "Lesser"
// }

// test/bool ? result if true : result if false
let answer = 9 > 7 ? "Greater" : "Lesser"

console.log(answer)

// BONUS: Switch Statements
console.log("--------- Switch Statements ---------");
let day = "Wednesday";
switch(day) {
    case "Monday":
    case "MONDAY":
    case "lunes":
        console.log("Monday's child is fair of face");
        break;
    case "Tuesday":
        console.log("Tuesday's child is full of grace");
        break;
    case day.includes("W"): // doesn't work b/c this is a bool
        console.log("Wednesday's child is full of woe")
        break;
    default:
        console.log("I forgot the poem")
        break
}
