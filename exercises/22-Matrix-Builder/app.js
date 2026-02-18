// Your code here
function matrixBuilder(n) {
    let matrix = []
    let x;
    let arr = []

    for (let i = 0; i < n; i++) {
        let x = Math.floor((Math.random() * 2));
        arr.push(x);
        for (let j = 0; j < n; j++) {
            matrix.push(arr);
        }
    }
    return matrix;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
