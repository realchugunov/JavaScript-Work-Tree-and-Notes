let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music', 'sport']
}

//How to access to object properties?
x = person.name //console.log result will be = John Doe
x = person['age']; //console.log result will be = 30

//What if we have an object inside an object? How do we access it?
x = person.address.state; //console.log result will be = MA

//Change a property inside of an object?
person.name = 'Jane Doe'; //console.log result will be = 'Jane Doe'

//Add a property to the object
person.hasChildren = true; //Now hasChildren added to the object as a property!

//Delete a property inside of an object
delete person.age; //Now age property got deleted!

//Creating a function inside an object
person.greet = function() {
    `Hello my name is ${this.name}` //console.log result will be = Hello my name is Jane Doe.
}
    //Accessing to a function inside an object
    person.greet();




