/*

JSON, it stands for JavaScript Object Notation and it is a lightweight data interchange format.
It's essentially a way of storing data in a simple human readable format.
API's is to send and receive data to and from a server. 

*/

const post = {
    id: 1,
    title: 'Post one',
    body: 'This is the body'
};

//Convert to JSON string 
const str = JSON.stringify(post); //It will format to the JSON string format.

//Parse JSON
const obj = JSON.parse(str); //Object literal type of format.

//If you want to access a specific property first you need to parse it.
console.log(obj.id) //console.log will be = 1