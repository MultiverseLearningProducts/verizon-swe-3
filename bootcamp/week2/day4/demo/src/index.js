console.log('\n--------- Recursion ---------\n');
// Goal is to implement factorial

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(4))

console.log('\n--------- Direct and Indirect Recursion ---------\n');

console.log('\n--------- Direct Recursion ---------\n');

// Goal is to determine if number is even or odd
function evenOrOdd(n) {
    if (n == 2) {
        return "even"
    } else if (n == 1) {
        return "odd"
    }

    return evenOrOdd(n - 2)
}
console.log(17, evenOrOdd(17))
console.log(20, evenOrOdd(20))

console.log('\n--------- Indirect Recursion ---------\n');
function isEven(n) {
    if (n == 2) {
        return true;
    }
    return isOdd(n - 1)
}
function isOdd(n) {
    if (n == 1) {
        return true;
    }
    return isEven(n - 1)
}
console.log(17, evenOrOdd(17))
console.log(20, evenOrOdd(20))

console.log('\n--------- Directory Tree Traversal ---------\n');
const fileSystem = {
    name: 'root',
    isFolder: true,
    files: [
        {
            name: 'users',
            isFolder: true,
            files: [
                {
                    name: 'laurie',
                    isFolder: true,
                    files: [
                        {
                            name: 'README',
                            isFolder: false,
                            text: "Hello world"
                        }, {
                            name: "calendar",
                            isFolder: false,
                            text: "24 April 2025"
                        }
                    ]
                }, {
                    name: 'callie',
                    isFolder: true, 
                    files: [
                        {
                            name: 'noise',
                            isFolder: false,
                            text: 'Meow'
                        }
                    ]
                }
            ]
        },  {
            name: 'programs',
            isFolder: true,
            files: [
                {
                    name: 'excel',
                    isFolder: false,
                    text: "a spreadsheet program"
                }, {
                    name: 'word',
                    isFolder: false, 
                    text: "a word processing program"
                }
            ]
        }
    ]
};

function printFile(file, indent="") {
    if (file.isFolder) {
        console.log(indent + file.name + "/")
        for (subfile of file.files) {
            printFile(subfile, indent + " ");
        }
    } else {
        console.log(indent + file.name + ':"' + file.text + '"')
    }
}
printFile(fileSystem)