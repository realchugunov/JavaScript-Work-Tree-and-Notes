/*
let x;

const name = Dmitry;
const age = 23;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
*/

// Template Literals.
/*
let x;

x = `Hello, my name is ${name} and I am ${age} years old`; 
*/

// String Properties and Methods

/*
const s = new String('Hello World');

x = typeof s; //console.log result will be = object.
*/

// Access value by key
//search a string for a specified value 

/*
const s = 'Hello World'; 

x = s.substring(0, 4) //console.log result will be = hell. 
                        // it starts index = 0 and ends at 4.

*/

slice(); method 
/*
//the array slice method returns a shallow copy of a portion of an array.Meaning that it won't modify the original array.
//You can provide the beginning index and the end index. Lets see how that looks in codes.

let x;
const s = 'Hello World';
x = s.slice(0, 5) //console.log result will be = Hello
                  //There is few differences with substring, one of them is that with slice, we can start from the end with negative numbers.

// for instance

const numbers = [1, 2, 3, 4, 5];
//lets say we want the last three items inside the array.

const numbers2 = numbers.slice(-3) //console.log result will be = [3, 4, 5]

// another instance for slice();

//starting index is 0, end index is array length.But we can specify what index we want! Remember last index is not included.

const numbers = [1, 2, 3, 4, 5] //lets say we want numbers from two to four.
const numbers2 = numbers.slice(1, 4) //console.log result will be = [2, 3, 4]
*/

replace(); method
/*
//let's say we want to set the word 'World' to 'John'
let x;
const s = "Hello World";

//first index will be: search for a string within a string and the second one will be the word that you want to replace.
x = s.replace('Word', 'John') //console.log result will be = "Hello John
*/

includes(); method
/*
//this method will return 'true' or 'false' if a string is found within that string.

let x;
const s = "Hello World"; //let's say we want to find "Hello" word.
x = s.includes("Hello") //console.log result will be 'true' because "Hello" word is found within that 's' string.
*/

split(); method
/*
// it will split a string into an array and it takes in a separator as an argument.
let x;
const s = "Hello World"
x = s.split(' ') //console.log result will be ['Hello', 'World']
//If we wanted to split every character into an array item then we just put quotes.
x = s.split('') //console.log result will be ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']  
*/