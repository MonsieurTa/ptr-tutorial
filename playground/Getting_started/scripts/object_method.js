let user = {
  name: "John",
  go: function() { console.log(this.name) }
};

(user.go)()

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };
//
// let user = makeUser();
//
// alert( user.ref.name ); // What's the result?
// An error.

let	calculator = {
	a : 0,
	b : 0,
	read: function () {
		this.a = +prompt("a?", 0);
		this.b = +prompt("b?", 0);
	},
	sum: function () {
		return (this.a + this.b);
	},
	mul: function () {
		return (this.a * this.b);
	},
}

//calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
	return (this);
  },
  down() {
    this.step--;
	return (this);
  },
  showStep: function() { // shows the current step
    alert(this.step);
  }
};

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

let	calc = {
	this.a
}
