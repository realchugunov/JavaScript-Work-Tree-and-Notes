//Nesting Arrays
const fruits = ['apple', 'pear', 'orange']
const berries = ['strawberry', 'blueberry', 'rasberry']

fruits.push(berries); //console.log result will be = (4) ['apple', 'pear', 'orange], Array(3) ['strawberry', 'blueberry', 'rasberry] 
                      //So we have an array within an array. That is how we can nest them!

                      //Let's say we want to get 'blueberry' which is nested in the nested array.
                      //First of all we want the three index (0 based index) and three index is whole the berries.
                      x = fruits[3] //If we just log that we will get the whole berries.
                                    //If we want to get blueberry that is gonna be index 1 on nested array.
                      x = fruits[3][1] //console.log result will be = 'blueberry'!

//Let's create a new whole array and we want to nest both fruits and berries:
let x;
const allFruits = [fruits, berries]; //console.log result will be = (2) [Array(4), Array(3)]
                                                                // > 0: (4) ['apple', 'pear', 'orange']
                                                                // > 1: (3) ['strawberry', 'blueberry', 'rasberry'];
                                     //It's an array with two items and both items are arrays.
                                     //For instance we want to access strawberry, which is at the (1) index and we want the first item in that array
                                     x = allFruits[1][0]; //console.log result will be = strawberry!

//Concatenate Arrays
    //taking the items from one array and basically adding them into a different array as separate items on the same level.
const myFruits = ['apple', 'pear', 'orange']
const myBerries = ['strawberry', 'blueberry', 'rasberry']
x = myFruits.concat(myBerries) //console.log result will be = (6) ['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'rasberry']
                               //What we got is one single array that has everything from fruits and berries.
    //Spread Operator (...)
    /* represented as three dots and this can be used with arrays as well as objects.*/
    /* Instead of using concat what we could do is: */
    x = [...myFruits, ...myBerries] /*console.log result will be (6) ['apple', 'pear', 'orange', 'strawberry', 'blueberry', 'rasberry']*/
                                    //We will get the same exact result that we got with concat.
                                    //If we took spread operator from the myBerries it will be separated from the first 0 array:
                                    x = [...myFruits, myBerries] /*console.log result will be (3) ['apple', 'pear', 'orange' ['strawberry', 'blueberry', 'rasberry']]*/

    /* Flatten Arrays */
    //Let's say we have more than 2 nested arrays, to combine them into a single array:
    const nestArr = [1, 2, [3, 4], 5, [6, 7], 8];
    x = nestArr.flat(); //console.log result will be = (8) [1, 2, 3, 4, 5, 6, 7, 8]

/* Static Methods on Array Object */
    Array.isArray(); //what this does is it checks to see if something is an array
    x = Array.isArray(myFruit); //console.log result will be = true, because myFruit is an array.

    //Create an array from an array like value
    x = Array.from('12345'); //console.log result will be = (5) ['1', '2', '3', '4', '5']
                             //It takes the string ('12345') and gives us an array that has 1 through 5 as an element.
    
    //Create an array from a set of values.
    const a = 1;
    const b = 2;
    const c = 3;

    x = Array.of(a, b, c); //console.log result will be (3) [1, 2, 3]