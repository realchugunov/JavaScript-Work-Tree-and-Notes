function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }
    second(); 
    //You can access parent variables but you can't access child variables.
    console.log(y); //console.log result will be = y is not defined!
}

first();

//Blocks
if (true) {
    const x = 100;

    if(x === 100) {
        const y = 2;
        console.log(x + y); //console.log result will be = 300 
    }

console.log(y); //console.log result will be = y is not defined because it is created in child.
                //Keep in mind that we can access parent's variables but we cannot access child's variables outside of it.
}

