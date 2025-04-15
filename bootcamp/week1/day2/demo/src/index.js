#!/bin/node

/* **** variables **** */
console.log('--------- variables ---------');
// variable declaration (no assignment)
let imNotSure;
console.log('imNotSure: ', imNotSure);

// variable declaration and assignment
let favoriteNum = 6;
console.log('favoriteNum: ', favoriteNum);

// variables can be reassigned
favoriteNum = 9;
console.log('favoriteNum: ', favoriteNum);

// attempting to access a variable before declaration will result in error
// console.log('notHere: ', notHere);

/* **** constants **** */
console.log('--------- constants ---------');

// constants cannot be "defaulted to undefined"
// const CANT_DO_THIS;

// constant declaration and assignment
const FUN_STR = 'JavaScript is Fun!';
console.log('FUN_STR: ', FUN_STR);
// FUN_STR = 'no';

/* **** The JavaScript Primitive Data Types:  **** */

/* *Primitive Data Type 1: Strings* */
console.log('--------- strings ---------');

//Initializing an Empty String Variable
let str = '' //With single quotes
let str2 = "" //With double quotes
console.log(str, str2)

//Initializing a String Variable with Characters
let str3 = " " //With White Space Character
let str4 = "@#$%^" //With Symbol Characters
let str5 = "Multiverse" //With Letter Characters
let str6 = "12387664" //With Numeric Characters
console.log(str3, str4, str5, str6)

//Initializing a String within a String
let str7 = "Shakespeare said 'To be, or Not to be. That is the Question.'" //Single Quotes within Double Quotes
console.log(str7)

let str8 = 'Steve Jobs said "Everyone should learn to program computers. It teaches you how to think."' //Single Quotes within Double Quotes
console.log(str8)

//Verify Type Using Type Of Method: 
typeof(str);
console.log(typeof(str)); 

// bonus: template string
let strTemplate = `${str5} is a ${str6}`; //Using Template String with Backticks
console.log(strTemplate); //Output: Multiverse is a 12387664

/* Primitive Data Type 2: Number */
console.log('--------- numbers ---------');

//Initializing Different Types of Numbers
let num1 = 9 // Positive Whole Number
let num2 = 99.9 //Positive Float (Decimal) Number
let num3 = -15; //Negative Whole Number
let num4 = -19.99 //Negative Float (Decimal) Number
console.log(num1, num2, num3, num4)

//Verify Type Using Type Of Method: 
console.log(typeof(num1), typeof(num4));
/* Primitive Data Type 3: Boolean */
console.log('--------- Booleans ---------');

//Initialize One of Two Values
let bool1 = true;
let bool2 = false;
console.log(bool1, bool2)

//Verify Type Using Type Of Method: 
console.log(typeof(bool1));

/* Primitive Data Type 4: Undefined */
console.log('--------- Undefined ---------');
//Initializing an Undefined Variable (By Using no Value):
let undef1; //No value, will default to undefined

//Initializing an Undefined Variable (By Using Keyword):
let undef2 = undefined; //Undefined keyword makes this undefined type

console.log(undef1, undef2)

//Verify Type Using Type Of Method: 
console.log(typeof(undef1), typeof(undef2));

/* Primitive Data Type 5: Null */
console.log('--------- Null ---------');

//Initialing a variable with Null (Using the Keyword)
let item1 = null; //Object with no Reference
console.log(item1, typeof(item1))

/* **** expressions **** */
console.log('--------- expressions ---------');
// Valid Expressions
console.log(9);
console.log(9 === 11);
console.log(true);
console.log('I ' + ' am ' + ' hungry.');

// NOT an expression:
const ME = 'developer';

// ... well what is being assigned to `me` is. But the entire line is a statement.  We couldn't console log the entire line.
// console.log(ME = 'developer');