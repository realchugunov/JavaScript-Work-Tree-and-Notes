//We can access to the Global Variable on anywhere, for instance;
const x = 100;

if (true) {
    const y = 200;
    console.log(x); //console.log result will be = 100;
    console.log(y + x); //console.log result will be = 300;
}

console.log(x + y); //console.log result will be = Uncaught ReferenceError: y is not defined. Because 'y' is not defined in global scope.

for (let i = 0; i <= 10; i++) {
    console.log(i); //console.log result will be = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. (it is gonna console.log every number till reach 10)
}

console.log(i); //console.log result will be = i is not defined.

//Differences between Var Vs Let and Const

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(a); //a is not defined;
console.log(b); //b is not defined;
console.log(c); // result = 700; //That is the big difference between var vs let and const.
                                //var is not a block scope

