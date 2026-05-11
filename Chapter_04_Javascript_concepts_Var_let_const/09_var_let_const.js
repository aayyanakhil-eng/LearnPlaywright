// Variable declarations in JavaScript or basic of Var
var v = 10;
let l = 20;
const c = 30;

var browser = "firefox"; // var allows redeclaration
var browser = "chrome"; // redeclaration allowed
browser = "safari"; // reassignment allowed

console.log(browser); // Output: "safari"


var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);


// function concept in JavaScript


console.log("Hi");   // instead of writing console.log("Hi") multiple times, we can create a function and call it whenever needed.
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from Function");
}


say();  // calling the function to execute the code inside it
say();