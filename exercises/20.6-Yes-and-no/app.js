let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let str = theBools.map((num) => {
    if (num === 1) {
        return 'wiki';
    } else {
        return 'woko';
    }
});

console.log(str);