var a = 10;   // Global scope

// var is fucntion scope
// var can be redeclared and reassigned

console.log(a); // Output: 10

function test() {
    console.log(a); // Output: 10 (var is function scoped, so it can access the global variable 'a')
    var a = 20; // local scope
    console.log(a); // Output: 20 (local variable 'a' shadows the global variable 'a')
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
}

test();     // calling the function to execute the code inside it

var a = 40; // redeclaration of 'a' is allowed with var
