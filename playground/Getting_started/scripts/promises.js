function loadScript(src) {
	return new Promise(function(resolve, reject) {
		let script = document.createElement('script');
		script.src = src;
		script.onload = () => resolve(script);
		script.onerror = () => reject(new Error("Error: " + src));
		document.head.append(script);
	});
}

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");
//
// promise.then(
// 	script => alert(`${script.src} loaded successfully`),
// 	error => alert(error)
// );

function delay(ms) {
	return new Promise(function(resolve, reject) {
		setTimeout(() => resolve("Ok"), ms);
	});
}
/*
	solution:
	function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
*/

// delay(3000).then(() => alert('runs after 3 seconds'));

// fetch('/article/promise-chaining/user.json')
//   .then(response => response.json())
//   .then(user => alert(user.name));
//
// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig',
//   'https://no-such-url.com'
// ];
//
// // make fetch requests
// Promise.all(urls.map(url => fetch(url).catch(err => err)))
//   // map each response to response.json()
//   .then(responses => Promise.all(
//     responses.map(r => r instanceof Error ?
// 		r : r.json().catch(err => err))
//   ))
//   // show name of each user
//   .then(users => {  // (*)
//     for(let user of users) {
//       alert(user.name);
//     }
//   });

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;
//
//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));
//
//   document.head.append(script);
// }
//
// let loadScriptPromise = function(src) {
//   return new Promise((resolve, reject) => {
//     loadScript(src, (err, script) => {
//       if (err) reject(err)
//       else resolve(script);
//     });
//   })
// }

async function loadJson(url) {
	let response = await fetch(url);
	if (response.status == 200) {
		return (await response.json());
	}
	throw new Error(response.status);
}

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
	let response = await fetch(url);

	if (response.status == 200)
		return (response.json());
    throw new HttpError(response);
}

async function demoGithubUser() {
	let name = prompt("Enter a name?", "iliakan");

	try {
	  let user = await loadJson(`https://api.github.com/users/${name}`);

	  alert(`Full name: ${user.name}.`);
	  return (user);
	}
	catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      }
	  else
        throw err;
	}
}

// demoGithubUser();

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
	wait().then(result => alert(result));
}

// f();
