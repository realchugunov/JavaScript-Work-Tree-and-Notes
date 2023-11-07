//regular function declaration
/*
function add (a, b) {
    return a + b;
}
*/
console.log(add(1, 2)); //console.log result will be = 3

//rewriting add function as "arrow function" syntax
const add = (a, b) => { return a + b; }
console.log(add(1, 2)); //console.log result will be = 3

/*

There are some things that we can do to make this even shorter since 
we have only single expression (return),/one line expression here that 
we returning something we can shorten this by getting rid of return statement
and curly braces.

*/

//Shorter version
const subtract = (a, b) => a - b; // After the arrow, it means we want to return this (a - b) expression.
console.log(subtract(10, 5)); //console.log result will be = 5

/*
Now there is another things that we can shorten things up.
If your function only has single parameters we don't need to have parantheses.
*/ 

const double = a => { a * 2};
console.log(double(10)); //console.log result will be = 20

//Returning an object
const createObj = () => {
    name: 'Brad';
};
console.log(createObj()); //Will not work, you have to surround braces with parantheses!

const createObjFix = () => ({
    name: 'Brad'
});
console.log(createObjFix()); //console.log result will be = {name: 'Brad'} 

//Array function in callback

/*  NOTE
Callback is basically when we pass the function into another function.
*/

const numbers = [1, 2, 3, 4, 5]

numbers.forEach(); //What you'll pass in those parantheses are function. You can pass regular Anonymous function.

numbers.forEach(function (n) {
    console.log(n); //It'll basically log each number in console.
})

//Line 51, This is also good place to use arrow function
numbers.forEach(n => console.log(n)); //console.log result will be the same, it'll log each number in an array.





