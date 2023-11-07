
//Nesting Objects
let x;
const obj1 = {a: 1, b: 2};
const obj2 = {c: 2, d: 4};

const obj3 = {obj1, obj2}
x = obj3; //console.log result will be an object that has two object inside.

//Combine two objects into a single object?
let s;
const firstObj = {a: 1, b: 2};
const secondObj = {c: 2, d: 4};



const thirdObj = {...obj1, ...obj2}
s = thirdObj //console.log result will be an object showing firstObj & secondObj properties, only in an object.

const fourthObj = Object.assign({}, firstObj, secondObj) //Whatever we passed in inside the bracket (as an argument), the properties of those,
                                                         //are going to assigned to this ({}) empty object or curly brackets. 
                                                         //So, thirdObj and fourthObj are doing the same thing. They re just have different ways!

//Accessing the array of an object
const todos = [
    { id: 1, name: 'Buy Milk'},
    { id: 2, name: 'Pickup kids from the school'},
    { id: 3, name: 'Take out Trash'},
];

x = todos[0].name //Remember? Arrays are 0 indexed, so we accessed to first object. Console.log result will be = Buy Milk

//Get all of the keys in an object and put those in an array, we can use Object.keys();
const todo = new Object();
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;
x = Object.keys(todo); //console.log result will be = (3) ['id', 'name', 'completed']
                       //We took the keys from the object and put them into an array.

//Getting length of an object
    //The way we can get it is by first getting the keys and getting the length of that

    x = Object.keys(todo).length; //console.log result will be = 3

//Get an array with all the values (just the values)
x = Object.values(todo);  //console.log result will be = (3) [1, 'Buy Milk', false]

//Get an array of the key value pairs 
x = Object.entries(todo); //console.log result will be = (3) [Array(2), Array(2), Array(2)]
                          //                             >0: (2) ['id', 1]
                          //                              1: (2) ['name', 'Buy Milk']
                          //                              3: (2) ['completed, false]
                          //                                Length: 3;  


//Boolean indicating if the object has a specific property
x = todo.hasOwnProperty('name'); //console.log result will be = true;

