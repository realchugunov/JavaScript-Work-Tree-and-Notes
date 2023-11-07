//This is an example of type coercion where JavaScript implicitly changed number to string.


let x;

x = 5 + '5';
console.log(x, typeof x); //console.log result of this code is 55 string. 

x = 5 + Number('5'); //console.log result of this code is 10 number.

x = 5 * '5'; //console.log result, 25 'number'. If you use multiplication between strings that doesn't make any sense you're not gonna get 
             //anything from that, so JavaScript decided to coerce it to a number so it could be multiplied.

