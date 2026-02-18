// Your code here
function lyricsGenerator(arr) {
    let str = '';
    let counterOfone = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {
            str += 'Boom ';
            counterOfone = 0
        }
        if (arr[i] === 1) {
            str += 'Drop the bass ';
            counterOfone += 1;
        }
        if (counterOfone === 3) {
            str += '!!!Break the bass!!! '
        }
    }

    return str;

}

// Don't change anything below this line
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))
