const x = 100;
console.log(x, 'in global'); //console.log result will be = 100 'in global'

function run() {
    console.log(x, 'in function'); //console.log result will be = 100 'in function' means it is also accessible in function.
}

run();

if(true) {
    console.log(x, 'in block'); //console.log result will be = 100 'in block' it is also accessible.
}

function add() {
    const y = 50; //This is a function scope, not a global variable.
    console.log(y); //console.log result will be = 50;
}

console.log(y); //console.log result will be = Uncaught ReferenceError: y is not defined because we declared y inside of the function.
                //We cannot access to y outside of the function.
add();


