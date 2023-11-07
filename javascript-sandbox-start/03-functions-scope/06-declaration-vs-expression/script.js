 //Function Declaration

 function addDollarSign(value) {
    return '$' + value
 }

 console.log(addDollarSign(100)); //console.log result = $100

 //Function expression
 const addPlusSign = function(value) {
    return '+' + value;
}

console.log(addPlusSign(200)); //console.log result = +200

/*
Hoisting is the process of moving all the function and variable declarations to the top of the current scope before the code is run.

So you can think of it, before your code is actually executed you can think of a step before that where it goes through and it looks for all 
your function declarations and your expressions and your variables and puts all those at the top of the page.

    For Instance put console.log(addDollarSign(100)); top of the function addDollarSign it will still work, but
    if you put console.log(addPlusSign(200)); top of the function addPlusSign it won't work because it is a Function Expression!

*/
