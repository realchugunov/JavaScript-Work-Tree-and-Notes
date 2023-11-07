// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITIAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

/*NOTE

Loop is a control structure that provides a way to do iteration (tekrarlama/yineleme)in programming.

Iteration is a process where you repeat something over and over again until certain conditions are met or until a
certain condition is not met and this can help automate tasks and so on.

First of all, we're gonna use i variable in for loop which is very common.
Second one is the condition that we want this the code to run as long as this is met.

*/


for (let i = 0; i <= 10;) { //as long as 'i' is less than or equal to 10, as long as the condition is met the code will run.

}

/* 
    So basically, it start with 0, 
    going through 10, 
    it's going to increment by one, 
    so 'i' will then be equal to 1, 

    it is going to go through again,
    it's going to run whatever code we put in braces every time up until i <= 10 is no longer true.

*/

for (let i = 0; i <= 10; i++) {
    console.log("Number" + i); //Log result = Number 0, Number 1, Number 2, Number 3, Number 4, Number 5, Number 6, Number 7, Number 8, Number 9, Number 10
}

/* NOTE
    If we change initialization from 0 to 5, then console.log will be = Number 5, Number 6, Number 7, Number 8, Number 9, Number 10
*/

for (let i = 5; i <= 10; i++) {
    if (i === 7) {  console.log('7 is my lucky number'); 
 } else {
    console.log('Number' + i);
 }
} //console.log result = Number 5, Number 6, 7 is my lucky number, Number 8, Number 9, Number 10


//Nested loops

    /* NOTE
    When we use another for loop inside of the for loop, do not use the same variable such as 'i'
    */
    
    for (let i = 1; i <= 10; i++) {

        for (let j = 1; j <= 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`)
        }
    } //Log will be like the calculation chart between numbers.

//Loop through an array
    const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

    //As long as i is less than the length of an array,
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]); //Log result = Brad, Sam, Sara, John, Tim
    }

    //Sara is the best!
    for (let i = 0; i < names.length; i++) {

        if (i === 2) {
            console.log(names[2] + 'is the best!');
        } else {
            console.log(names[i]); //log result = Brad, Sam, Sara is the best!, John, Tim
        } 
    }