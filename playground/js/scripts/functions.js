function	inBetween(a, b) {
	return (function(x) {
		if (x >= a && x <= b)
			return (x);
	});
}

function	inArray(...argv) {
	return (function(x) {
		return (argv.includes(x));
	})
}

let arr = [1, 2, 3, 4, 5, 6, 7];

// alert(arr.filter(inArray(1, 2, 10)));

function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10 ; i++) {
    let shooter = function() { // shooter function
		alert(i); // should show its number
    };
    shooters.push(shooter);
  }
  return shooters;
}

/*
	Modify the code of makeCounter() so that the counter can also decrease and set the number:

	counter() should return the next number (as before).
	counter.set(value) should set the count to value.
	counter.decrease() should decrease the count by 1.
	See the sandbox code for the complete usage example.

	P.S. You can use either a closure or the function property to keep the current count. Or write both variants.
*/


function makeCounter() {
	let	count = 0;

	function counter() {
		return (count++);
	}
	counter.set = function(value) {
		count = value;
	};
	counter.decrease = function() {
		count--;
	};
	return counter;
}

function sum(a) {
	let res = a;

	function add(b) {
		res += b;
		return (add);
	}
	add.toString() = function() {
		return (res);
	};
	return (add);
}

//Ca marche pas
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
	constructor({template}, precisions) {
		super(template);
		this.precisions = precisions;
	}
	start() {
		this.render();
		this.timer = setInterval(() => this.render(), this.precisions);
	}
}
