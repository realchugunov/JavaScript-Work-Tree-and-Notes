console.log(10 > 20 && 30 > 15);
/* 

    We're gonna get false because when we use the double Ampersand in this way, everything has to be true.
    We could add million more true things it still gonna be false because this (Line 1) first one is not true.

*/

console.log(10 < 20 && 30 > 15); //Now we get true.

//So when it comes to or || Operator:

console.log(10 > 20 || 30 > 15); //We'll get true even though the first one is false. One of these are true which is the only thing matters.

/*
    double ampersand (&&) >> all have to be true
    or operator (||) >> one of them has to be true
*/ 

// && - Will return first falsy value or the last value
let a;

a = 10 && 20

console.log(a); //We'll get 20. 10 or 20 none of them are falsy so it gives us the last value

a = 10 && 20 && 30 //We'll get 30 because no falsy values.

a = 10 && 0 && 30 //We'll get 0

a = 10 && '' && 0 && 30 //We'll get empty string ''

//But when we do gonna use these??

const posts = ['Post 1', 'Post 2']; //Let's say we want to display this on our website
console.log(posts[0]); //log = Post 1
    /* 
        but what if we would have an empty array? It'll give us undefined but we don't want to display undefined on our website.
        So, what we could do is:
    */

        posts.length > 0 && console.log(posts[0]); //It will not display undefined if there is no post

// || >> Will return the first truthy value or the last value

let b;
b = 10 || 20; //log = 10, both of these truthy so it'll return the first truthy value
b = 0 || 20; //log = 20, returning first truthy value or the last
b = 0 || null || ''; //all of them are falsy value so it'll return the last which is empty string
console.log(b);

// ?? >> Returns the right side operand when the left is either null or undefined
let c;

c = 10 ?? 20; //log = 10, returns the right side when the left is either null or undefined!
c = null ?? 20; //log = 20
c = undefined ?? 30; //log = 30
c = 0 ?? 30; //log = 0 because it is not just looking for falsy, it's also looking for on null or undefined
c = '' ?? 30; //log = '', because it is not null or undefined

console.log(c);