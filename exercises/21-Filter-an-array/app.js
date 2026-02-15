let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

// Your code here

let resultingNames = allNames.filter(function (str) {
    if (str.includes('R')) {
        return str
    }
});

console.log(resultingNames);
