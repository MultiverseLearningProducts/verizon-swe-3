const example = [
    [ 
        10,
        ["apples", "oranges"],
    ], 
    [ 
        25,
        ["hello", "world"],
    ]
];

console.log("\n\t*** BEFORE COPY ***")
console.table(example)

// UNCOMMENT ONE OF THESE LINES for COPY BY REFERENCE
// example[1] = example[0]
// example.splice(1, 0, 0)

// UNCOMMENT ONE OF THESE LINES for SHALLOW COPY
// example[1] = example[0].slice()
// example[1] = [ ...example[0] ]
// example[1] =  Array.from(example[0])

// UNCOMMENT THIS LINE for DEEP COPY
example[1] = structuredClone(example[0])

console.log("\n\t*** AFTER COPY ***")
console.table(example)

// Can the rows be changed independently?
example[0][0]++
example[0][1][1] = "plums"

console.log("\n\t*** AFTER CHANGES ***")
console.table(example)