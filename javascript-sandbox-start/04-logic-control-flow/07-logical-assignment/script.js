// ||= assigns the right side of the value only if the left is a falsy value

let a = false

if (!a) {
    a = 10;     //This can be useful because you want to check to see if a variable is false or null or anything falsy and if it is then you want to set that 
}                   //to a specific value
                    //Console.log result will be = 10

    /*Short hand*/ 
    a = a || 10 //What we're saying here is just the same thing we do on Line 5. If a is falsy then set the right hand side
                //console.log result will be = 10

    /*
    So, instead of using short hand, we could also do this:
    */

    a ||= 10 //console.log result will be = 10


// &&= assigns the right side of the value only if the left is a truthy value

    /* Long Version */
    let b = 10;

    if (b) {
        b = 20;
    }
    console.log(b); // console.log result = 20 because b is truthy 

    /*Shorter*/ 
    b &&= 20;

// ??= (nullish coalescing operator) assigns the  right side of the value only if the left is null or undefined

    /* Long Version */
    let c = null;

    if (c === null || c === undefined) {
        c = 20;
    } 

    console.log(c); // log = 20 because c is null

    /* Shorter */
    c ??= 20;