// let is a block-scoped variable declaration, which means it is only accessible within the block it is defined in.


let x = "Global Scope";

if (true) {
    // TDZ for x is created here, but it is not initialized until the let declaration is executed.  
    // console.log(x); // ReferenceError: Cannot access 'x' before initialization

    let x = "Block Scope";  // TDZ ends here, x is initialized with "Block Scope"
    console.log(x); // Output: Block Scope
}

console.log(x); // Output: Global Scope

// Note: The let declaration creates a new variable x that is scoped to the block, which is different from the var declaration that would have hoisted x to the function scope. 