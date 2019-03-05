"use strict"
const user = {};
user["name"] = "John";		// add a new property
user.name = "John";			// work as above
user["surname"] = "Smith";
user.name = "Pete";			// reassign property
delete user.name;			// delete property
delete user.surname;		// delete property

function isEmpty(obj)
{
	for (let elem in obj)
		return (false);
	return (true);
}

console.log(isEmpty(user));

let	salaries =
{
	John : 100,
	Ann : 160,
	Pete : 130
}

let sum = 0;
for (let elem in salaries)
	sum += salaries[elem];
console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj)
{
	for (let key in obj)
	{
		if (typeof(obj[key]) == "number")
			obj[key] *= 2;
	}
}

multiplyNumeric(menu);

for (let key in menu)
	console.log(menu[key]);
