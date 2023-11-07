// reduce is used to reduce your array down to a single value
    /*
        good use case for this is method is a shopping cart, let's say we have an array of products with different prices
        and you want to reduce that down to a total of the prices for your shopping cart, that's somewhere where you'll see
        reduce a lot.
    */

const array = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);

console.log(sumWithInitial); //Log result = 10

/* Explanation
So what is going on here is, reduces takes in a function and there is two arguments here, previousValue and currentValue. 
So, previousValue is basically what is returned from the last iteration or the last function that ran last callback.
This is also called accumulator and then the 'currentValue' is whatever the current element we're on.
And then you can also pass in as an additional argument 'initialValue' which is whatever you want the initial previous
value to be. Because obviously your first loop through you're not going to have a previous value so you can set that at 
the end and in the most cases it's going to be set to zero.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Let's say we want to get the sum of all of these numbers

const sum = numbers.reduce(function (accumulator, currentValue) { //accumulator also means previous value
    //So every time we run this line (28), we're going to take the accumulator(previousValue) and add it to the current value.
    return accumulator + currentValue;
    
    //then to set the initial value which is not actually required (Line 29)
}, 0)

console.log(sum); //Log result = 55

/* EXPLANATION
   So basically it started at 0 (line 31) then it went through (Line 24) and ran a function for each element
   took the previous value, so for instance when it was on 2, it took 1 and then added to the current value
   then function ran again for the next element and it took 3 and added to previous item or value which is 2
   and kept doing that until we're done with the array.
*/

/*  Shorter Version  */

const sum1 = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum1); //Log result = 55

/* NOTE 
   If we set the 0 to 10, log result will be changed from 55 to 65 and the reason of that is because now
   we're starting at 10 before we do anything
*/

// Using a for loop

const sum3 = () => {
    let acc = 0;

    for (const cur of numbers) { //We used for of because of array
        acc = acc + cur; // or acc += cur;
    }

    return acc;
}

console.log(sum3()); //Log result = 55

//More realistic instance | Shopping Cart

const cart = [
    {   id: 1, name: 'Product 1', price: 130   },
    {   id: 2, name: 'Product 2', price: 150   },
    {   id: 3, name: 'Product 3', price: 175   },
];

const total = cart.reduce((acc, product) => {
    return acc + product.price
}, 0);

console.log(total); // Log result = 455

