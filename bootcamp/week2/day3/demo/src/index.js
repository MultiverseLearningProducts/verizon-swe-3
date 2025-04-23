console.log('--------- loops ---------');

console.log('--------- for loops ---------');

const nums = [2, 4, 10, 16, 5, 4, 2, 1, 6, 7]
// Goal: find the first odd number in the array

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
        console.log(nums[i])
        break
    }
}

// Goal: find the sum of only the odd numbers
let sum = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 1) {
        sum += nums[i]
    }
}
console.log(sum)

console.log('--------- nested loops ---------');
const nest = [
    [4, 1, 7],
    [2, 8],
    [4, 7, 9, 10],
]

// Goal: add all the numbers in the 2D array
let sum2 = 0
for (let row = 0; row < nest.length; row++) {
    for (let col = 0; col < nest[row].length; col++) {
        sum2 += nest[row][col]
    }
}
console.log(sum2)

// Goal: print the pattern:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
for (let row = 1; row <= 5; row++) {
    let str = "";
    for (col = 1; col <= row; col++) {
        str += col + " "
    }
    console.log(str)
}

console.log('--------- while loops ---------');
// Goal: print the numbers from 1 to 10
let value = 1
while (value <= 10) {
    console.log(value)
    value++
}

console.log('--------- for...of loops ---------');
const months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];

// Goal: find months that start with a 'J'
let jMonths = []
for (let month of months) {
    if (month.startsWith("J")) {
        jMonths.push(month)
    }
}
console.log(jMonths)

// Goal: find odd-numbered months
const oddMonths = []
for (let i = 0; i < months.length; i++) {
    const monthNum = i + 1;
    if (monthNum % 2 == 1) {
        oddMonths.push(`${months[i]} (${monthNum})`)
    }
}
console.log(oddMonths)

console.log('--------- for...in loops ---------');
const chickenNoises = {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
};
// Goal: list all the chicken noises

for (let country in chickenNoises) {
    console.log(chickenNoises[country])
}

for (let country of Object.keys(chickenNoises)) {
    console.log(chickenNoises[country])
}

for (let noise of Object.values(chickenNoises)) {
    console.log(noise)
}

console.log('--------- extension ---------');

const text = "In the end, we will remember not the words of our enemies, but the silence of our friends." 
// Goal: which word(s) appear most frequently in this text?

// collect the words
const wordArray = text.split(" ")
const wordCounts = {}

// gather our counts (using clean data)
for (let word of wordArray) {
    // clean our data
    word = word.toLowerCase()
    if (word[word.length - 1] == ',' || word[word.length - 1] == '.') {
        word = word.slice(0, word.length - 1)
    }

    // if this is the first time we have seen this word, add to the wordCounts
    if (wordCounts[word] == undefined) {
        wordCounts[word] = 0
    }
    wordCounts[word]++;
}
// console.log(wordCounts)

// determine the maximum
let max = -1; 
for (count of Object.values(wordCounts)) {
    if (count > max) {
        max = count;
    }
}

// collect the words with that count
const maxWordList = []
for (let word in wordCounts) {
    if (wordCounts[word] == max) {
        maxWordList.push(word)
    }
}
console.log(wordCounts)
console.log(max, maxWordList)