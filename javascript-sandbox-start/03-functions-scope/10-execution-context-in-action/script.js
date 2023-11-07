/*

When you run any JavaScript, a special environment is created to handle the transformation & execution of code.
This is called execution context. It contains the currently running code and everything that aids in its execution.

There is a global execution context as well as a function context for every function invoked.

JavaScript is a single threaded and synchronous language. A thread you can think of as like a process and your code is executed
line by line on that thread or on that process.


    For Instance:
*/

let x = 100
let y = 50

function getSum (n1, n2) {
    let sum = n1 + n2
    return sum
}

let sum1 = getSum(x + y)
let sum2 = getSum(10, 5)

/* 
Creation Phase:
Line 15: x variable is allocated memory and stores "undefined"
    Remember variables in the memory creation phase, they're put into memory but they're stored as undefined.

Line 16: y variable is allocated memory and stores "undefined"
Line 18: getSum() function is allocated memory and stores all the code
Line 23: sum1 variable is allocated memory and stores "undefined"
Line 24: sum2 variable is allocated memory and stores "undefined"

Execution Phase:
Line 15: Places the value of 100 into the x variable
Line 16: Places the value of 50 into the y variable
Line 18: Skips the function because there is nothing to execute
Line 23: Invokes the getSum() function and creates a new function execution context.

Function EC Creation Phase:
Line 18: n1 & n2 variables are allocated in memory and stores "undefined"
    remember: we're in creation phase for the function execution context, so it's going to take these two (n1&n2)
    and store them in memory as undefined.
Line 19: It's going to store sum as undefined 

Function EC Execution Phase:
Line 18: n1&n2 are assigned 100 and 50
Line 19: Calculation is done and 150 is put into sum variable/in memory.
Line 20: going to return and tells the function execution context to return to the global execution context with the value of sum (150)
Line 23: Returned sum value is put into the sum1 variable.
Line 24: It's going to do whole thing over again, it's going to open up another execution context for the function and do the same thing just with different
         parameters.

*/

