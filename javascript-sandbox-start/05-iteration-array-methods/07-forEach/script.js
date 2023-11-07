/* 
    They take in a function as an argument which this is called a callback function.
    In that callback function we can pass in a variable for each element in that array.
    
    Now what for each does is just simply loops through it, doesn't need to return anything, it just loops
    through as if we were using a for or for of loop to just go through the array and do something specific.


*/

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

    //we call the method so in this case => For each => then method is going to take in a callback anonymous function

    socials.forEach(function (item) {
        console.log(item); //log result = Twitter, LinkedIn, Facebook, Instagram
    });

    /* 
        The function we passed in (15) is going to run for every element or every item that we have in the array, it's going to run 4 times

        So, you could pass in a function in this way (15) or:
    */

    socials.forEach((item) => console.log(item)); //Log result will be the same (16)

    /* 
        In addition to the item that we passed into the callback, there are some other arguments that we can pass in.

        We can pass 'index' of the current element being processed in the array and ofc it's start with 0

        We can also get the entire array.
     */

    socials.forEach((item, index, arr) => console.log(`${item} - ${index}`)); //Log result = 0 - Twitter, 1 - LinkedIn, 2 - Facebook, 3 - Instagram 

    /* 
        You can also pass in named function rather than an anonymous callback
     */

    function logSocials (social) {
        console.log(social); //So we want this function to run for every item that's in the array, so what we can do is (45)
    }

    socials.forEach(logSocials); //log result = Twitter, LinkedIn, Facebook, Instagram