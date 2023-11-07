//IIFE => Immediately Invoked Function Expressions)

/* 

There is a few reason that you might want to use IIFE,
    1) One of the biggest is to avoid Global Scope Pollution.

*/

// 1) Let's say we have a another Library we're working on (otherscript.js)

//const user = 'John'; //We'll get this user has already been declared error.Because it is declared in the global scope of the other file
                        //and now we're trying to declare in this scope as well. We could handle this error with IIFE.

    //Create a unnamed function with parantheses:
    ( function () {
        const user = 'John';
        console.log(user); //console.log result will be = John
    })(); //we need to open another parantheses at the end of the function because we want to invoke it immediately.

//Another instance, we can also use parameters in this unnamed function:
(function (name) {
    console.log('Hello' + name); //console.log result will be = Hello Shawn
})('Shawn') // => That is how we're adding Parameters to our IIFE

//You can have a named IIFE but you won't see that much because you can't call the function outside of the IIFE:
(function hello() {
    console.log('Hello');
    hello(); //When you call a function from itself that is a recursion and it is kind of an advantage topic that we'll get into it much later.
             //and we're not recommending it because it is basically crashing your browser!
})
hello(); //console.log result will be = hello is not defined.

