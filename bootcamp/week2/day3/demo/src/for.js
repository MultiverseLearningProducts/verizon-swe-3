let str = "abcdef";

console.log("------- 'for... in' (string) -------")
for (index in str) { // IN for INdex
    console.log(index);
}

console.log("------- 'for... of (string) -------")

for (letter of str) { // OF" finds the value
    console.log(letter);
}

let arr = ['g', 'h', 'i', 'j', 'k'];

console.log("------- 'for... in' (array) -------")
for (index in arr) { // IN for INdex
    console.log(index);
}

console.log("------- 'for... of' (array) -------")
for (item of arr) { // OF finds the value
    console.log(item);
}

let obj = {"m": 100, "n": 200, "o": 300, "p": 400, "q": 500}

console.log("------- 'for... in' (object) -------")
for (key in obj) {
    console.log(key, obj[key]);
}

console.log("------- 'for... of' (object) DOESN\'T WORK -------")
// for (value of obj) { // ERROR!!! use values below
for (value of Object.values(obj)) {
    console.log(value);
}