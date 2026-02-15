let people = [
	{ name: 'Joe', birthDate: new Date(1986, 10, 24) },
	{ name: 'Bob', birthDate: new Date(1975, 5, 24) },
	{ name: 'Erika', birthDate: new Date(1989, 6, 12) },
	{ name: 'Dylan', birthDate: new Date(1999, 12, 14) },
	{ name: 'Steve', birthDate: new Date(2003, 4, 24) }
];

let simplifier = function (person) {
	// Your code here
	let year = Math.abs(new Date().getFullYear() - person.birthDate.getFullYear());
	if ((new Date().getMonth() > person.birthDate.getMonth()) && (new Date().getDate() > person.birthDate.getDate())) {
		return `Hello, my name is ${person.name} and I am ${year} years old`
	}
	return `Hello, my name is ${person.name} and I am ${year - 1} years old`
};

console.log(people.map(simplifier));
