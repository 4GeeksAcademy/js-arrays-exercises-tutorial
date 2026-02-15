let people = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak', 'emilio'];

// Your code below
function deletePerson(name) {
    let newArray = people.filter((element) => element !== name);
    return newArray; // outcome is [2, 4, 2, 4]
}
console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
