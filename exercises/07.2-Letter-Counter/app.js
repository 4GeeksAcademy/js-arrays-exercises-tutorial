let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};
let parLower = par.toLowerCase();
// Your code here
for (let i = 0; i < parLower.length; i++) {
    if (parLower[i] != ' ' && !(parLower[i] in counts)) {
        counts[parLower[i]] = 0;
    }
    if (parLower[i] in counts) {
        counts[parLower[i]] += 1;
    }
}


console.log(counts);
