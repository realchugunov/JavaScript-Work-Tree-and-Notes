//Array Literal
const numbers = [12, 45, 33, 21, 198];
const mixed = [12, true, false, null, 'hello'];

//Array Constructor
let x;
const fruits = new Array('apple', 'orange', 'grape');
console.log(fruits); //console.log result will be = (3) ['apple', 'orange', 'grape]

x = numbers[0] //console.log result will be = 12
x = numbers[0] + numbers[3] //console.log result will be = 41

x = `My favorite fruit is an ${fruits[0]}` //console.log result will be = My favorite fruit is an apple. 
x = numbers.length //console.log result will be = 5

//How to change a value inside an array?
fruits[2] = 'pear';
x = fruits //console.log result will be = (3) ['apple', 'orange', 'pear']

//Let's add a fruit into the array
fruits[fruits.length] = 'strawberry';
x = fruits //console.log result will be = (4) ['apple', 'orange', 'pear', 'strawberry']
