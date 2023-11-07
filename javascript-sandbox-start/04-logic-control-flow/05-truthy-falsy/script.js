//Anything is not falsy is gonna be a true value

//String with anything in it is a truthy value for instance:
const email = 'test@example.com'

if (email) {
    console.log('You passed in an email') //console will log this string because string with anything in it is a truthy value.
}

console.log(Boolean(email)) //console.log result = true

/* 

Falsy Values:
    false
    0
    "" or '' (Empty string)
    null
    undefined
    NaN

Truthy Values:
    Everything else that is not falsy
    true
    '0' (0 in a string)
    ' ' (Space in a string)
    'false' (False in a string)
    [] (Empty array)
    {} (Empty object)
    function () {} (Empty Function)

*/

// Truthy and Falsy Caveats
const children = 2

if (children) {
    console.log(`You have ${children} children`)
} else {
    console.log('Please enter number of children')
} //console.log result = You have 2 children

  /*
  The problem here is, if you pass 0 value into the children variable, console will log false or error because 0 is a falsy value.
  For solution, here one thing you could do is say is children not equal to undefined. (children !== undefined)
  */
 
if (children !== undefined) {
    console.log(`You have ${children} children`)
} else {
    console.log('Please enter number of children')
}

/* 
    Now console.log result will be = You have 0 children
*/

//    Another thing we could do for solution is:

if (!isNaN(children)) {
    console.log(`You have ${children} children`)
} else {
    console.log('Please enter number of children')
}

//  Another caveat is => Checking for empty arrays
    /* 
        So maybe you have an array of blog posts and if there are no post, you want to say like 'No post to show' or something like that
    */

    const posts = ['Posts One', 'Posts Two'];

    if (posts) {
        console.log('List Post')
    } else {
        console.log('No posts to show')
    } 

    /* 
    The problem here is:
        >>It'll log = List Post but what if you wouldn't have posts? Let's say we have an empty array that passed in to the posts variable (  []   )
            it will still log List Post message because empty array is a truthy value.

        >>So what we could do is, we have a length property on arrays, and the length of empty array is 0
    */

            if (posts.length > 0) {              //Now if we do have empty array it'll log = No post to show.
                console.log('List Post')
            } else {
                console.log('No posts to show')
            }

//Checking for Empty Objects
const user = {
    name: 'Brad'
};

if (user) {
    console.log('List User')
} else {
    console.log('No User')
} //console.log result = List User

/* 
    If we delete the properties of object, means just an empty object it'll also log List User message.
        >>>user is a truthy value<<<
    
    We can't use length directly on Object (It'll give us undefined in log) what we could do is to use Object.keys
*/

if (Object.keys(user).length > 0) {     //that will give us an array of the keys and since that is an array we can use .length on it! 
    console.log('List User')
} else {
    console.log('No User')
} //console.log result = No User


//Loose Equality (==)
console.log(false == 0); //console.log result = true
                                            //  >> The reason for that is because 0 is a falsy value and obviously so is false
console.log('' == 0) //console.log result = true
console.log(null == undefined) //console.log result = true

// If you're trying to compare these you're not going to want true so that is where strict equality comes in (===)

console.log(false === 0); //console.log result = false                       
console.log('' === 0) //console.log result = false
console.log(null === undefined) //console.log result = false because strict equality checks the type as well