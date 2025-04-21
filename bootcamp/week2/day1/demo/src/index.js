// Arrays are a collection of items
// Items can be of any type, including other arrays
// They are mutable, meaning you can change them after creation
// They are zero-indexed, meaning the first item is at index 0
// They grow and shrink as needed
// They play the role of array, list, stack and queue in other languages!
console.log("------ Arrays ------")

// a 1-D array
const things = ['hello', 182, true, null]
console.log(things)
console.table(things)

// access specific values in an array
things[1] = 41
console.table(things[1])
console.log(things)

// add to end of array
console.log("push PI")
things.push(Math.PI)
console.table(things)

// remove from end of array
console.log("pop PI")
console.log(things.pop())
console.table(things)

// add to beginning of array
console.log("unshift FIRST")
things.unshift("FIRST")
console.table(things)

// remove from beginning of array
console.log("shift FIRST")
console.log(things.shift())
console.table(things)

console.log("------ 2D Arrays ------")
// 2D arrays are arrays of arrays
// they are used to represent tables, matrices, etc.

const grades = [
    ['name', 'score', 'out of', '%'],
    ['arman', 9, 15, 0.6],
    ['bea', 41, 50, 0.82],
    ['cara', 15, 20, null]
]

console.table(grades)

// get bea's row
console.log(grades[2])
// get bea's score
console.log(grades[2][1])

// change arman's name
grades[1][0] = 'adnan'
console.log(grades[1])

// calculate cara's percentage
grades[3][3] = grades[3][1] / grades[3][2]
console.table(grades)

// delete bea's row
grades.splice(2, 1)
console.table(grades)

// look at the numbers in adnan's row
console.log(grades[1].slice(1, 3))

// iterate through a 2D array
for (let row = 0; row < grades.length; row++) {
    let str = "R" + row + ": ";
    for (let col = 0; col < grades[row].length; col++) {
        str += "C" + col + ": " + grades[row][col] + "\t"
    }
    console.log(str);
}