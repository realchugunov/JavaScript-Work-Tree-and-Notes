/*
If you're creating an object where the key and the value are the same, if the value is a variable
then you dont have to add both
*/

const firstName = 'John';
const lastName = 'Doe';
const age = 30;
    //Let's say we want to create an object
    const person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    //If you do this and these are the same you don't have to add the value, 
    //simply do this:
    const histName = 'John';
    const hisLastName = 'Doe';
    const hisAge = 30;

        const thePerson = {
            hisName,
            hisLastName,
            hisAge
        }

//Destructuring
        //If we want to create a variable of ID with the ID of that todo:
        const todo = {
            id: 1,
            title: 'Take out trash'
        } 

        const { id, name } = todo.id;
        console.log(id); //console.log result will be = 1 'Take out trash'
        //Think of this as as pulling these variables out of the object and you can go multiple level deeps:

        const secondTodo = {
            firstId: 1,
            title1: 'Take out trash',
            user: {
                name1: 'John'
            }
        }
        const { firstId, title1, user } = todo;
        console.log(user); //console.log result will be = {name: John}

        //If we want to get the name or any other property:
/*
        const { firstId, title1, user: { name } } = todo;
        console.log result will be = John 
*/

//Rename properties or keys
const {
    firstId: todoId,
    title,
    user: { /*name*/ },
} = todo;

console.log(todoId); //console.log result = 1 
                     //Keep in mind that when you use curly brackets you're destructuring. If you don't then you're just renaming.

//Destructure Arrays
const numbers = [23, 67, 33, 49];
    //we create a variables for starting at the beginning for the first second, third an so on.
    const [first, second] = numbers;
    console.log(first, second); //It is gonna give us first two value, result = 23 67


/*

    //If we want to get the rest of the numbers and put them into a variable as an array, we can use rest operator.
    //Instead of writing third inside the array, put ...rest

    const numbers = [23, 67, 33, 49];
    const [first, second, ...rest] = numbers;
    console.log(first, second, rest); console.log result will be (2) [33, 49]

*/



