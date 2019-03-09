/*
	Let arr be an array.

	Create a function unique(arr) that should return an array with unique items of arr.

	For instance:

	function unique(arr) {
	  // your code
	}

	let values = ["Hare", "Krishna", "Hare", "Krishna",
	  "Krishna", "Krishna", "Hare", "Hare", ":-O"
	];

	alert( unique(values) ); // Hare, Krishna, :-O
	P.S. Here strings are used, but can be values of any type.

	P.P.S. Use Set to store unique values.
*/

function unique(arr) {
	let	set = new Set(arr);
	let	newArr = [];

	set.forEach((value, valueAgain, set) => {
		newArr.push(value);
	});
	return (newArr);
}

/*
	Anagrams are words that have the same number of same letters, but in different order.

	For instance:

	nap - pan
	ear - are - era
	cheaters - hectares - teachers
	Write a function aclean(arr) that returns an array cleaned from anagrams.

	For instance:

	let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

	alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
	From every anagram group should remain only one word, no matter which one.
*/


// Didn't find this one, I dit not think that keys were overwritten when it was passed multiple times
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr)
{
	let map = new Map();

	for (let value in arr)
		map.set(arr[value].toLowerCase().split('').sort().join(''), arr[value]);
	return (Array.from(map.values()));
}

/*
	We want to get an array of map.keys() and go on working with it (apart from the map itself).
	But there’s a problem:

	let map = new Map(	);

	map.set("name", "John");

	let keys = map.keys();

	// Error: keys.push is not a function
	keys.push("more");
*/

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");
for (let idx in keys)
	console.log(keys[idx]);

/*
	There is a salaries object with arbitrary number of salaries.

	Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

	If salaries is empty, then the result must be 0.

	For instance:

	let salaries = {
	  "John": 100,
	  "Pete": 300,
	  "Mary": 250
	};

	alert( sumSalaries(salaries) ); // 650
*/

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function	sumSalaries(salaries)
{
	let sum = 0;

	for (let value of Object.values(salaries))
		sum += value;
	return (sum);
}

/*
	Write a function count(obj) that returns the number of properties in the object:

	let user = {
	  name: 'John',
	  age: 30
	};

	alert( count(user) ); // 2
	Try to make the code as short as possible.

	P.S. Ignore symbolic properties, count only “regular” ones.
*/

let user = {
  name: 'John',
  age: 30
};

function count(user)
{
	return (Object.keys(user).length);
}
