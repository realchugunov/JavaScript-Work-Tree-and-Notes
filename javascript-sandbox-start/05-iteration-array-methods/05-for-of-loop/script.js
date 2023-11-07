/*
Basically Loop through iterable objects like arrays or any even strings and maps and sets.

This is a cleaner way to Loop through an array than a standard for Loop or a while loop.
*/

/* Loop Through Arrays
const items = ['book', 'table', 'chair', 'kite']

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}
*/

/*
Cleaner way to do this is (10), we can simply say const (in braces) and then give a variable name for each individual item.
Let's call it an item and then say 'of' items. 
*/

const items = ['book', 'table', 'chair', 'kite']
for (const item of items) {
    console.log(item);
} //console.log will be the same as the line 10, log = book, table, chair, kite

//And if we wanted to have an array with objects in it:
const users = [
    {name: 'Brad'},
    {name: 'Kate'},
    {name: 'Steve'}
];

for (const user of users) {
    console.log(users); //console.log will be = {name: 'Brad'}, {name: 'Kate'}, {name: 'Steve'}
} //and if we want to access to a specific property then we would do console.log(user.name);

/* Loop Over Strings */
const str = 'Hello World';

for (const letter of str) {
    console.log(letter); //log result = it'll loop through and its going to output each letter of that string
}

/* Loop Over Maps */ 
const map = new Map();

map.set('name', 'John');
map.set('age', '30');

for (const [key, value] of map) { //We can get key and the value by putting brackets in here and just saying 'key, value'
    console.log(key, value); //Log result = name John, age 30
}

