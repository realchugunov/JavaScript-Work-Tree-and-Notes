/*  NOTE  
In while loop, all that we put in braces is the condition when we initialize and increment the variable we don't do it within parantheses.
So we're initializing the 'i' variable outside of the loop.
*/

let i = 0;

while (i <= 20) {
    console.log('Number' + i); //It will log numbers between 0 to 20 like Number 0, Number 1.... Number 20
    i++; 
}

/* NOTE
For many cases, you could use either for loop or while loop and achieve the same result but a common rule that
many programmers follow is to use for loop when you know the number of times that you want the loop to run and
then to use while loop when the number of times the loop will run is unknown
*/

//  Loop over arrays
/*Line 6*/
const arr = [10, 20, 30, 40]

while (i < arr.length) {
    console.log(arr[i]); //Log result = 10, 20, 30, 40
    i++;
}

//Nesting while loops

while (i <= 5) {
    console.log('Number' + i);

    let j = 1;
    while (j <= 5) {
        console.log(`${i} times ${j} = ${i * j}`);
        j++;
    }
    i++;
}

/* NOTE 
    Do while loops a bit different because the do while loop will always run at least once even if the condition is false.
    So the answer to the question when we would I want to use a do while loop is when you always want the block of code to run 
    at least once even if the condition is never met.

    For instance:
*/

do {
    console.log('Number' + i); //These two line of code will always going to run once even if this is never true.
    i++;
} while (i <= 20) //If you would assign 21 value into the i variable, it'll still run and console.log result would be = Number 21
                  //But with the while loop it won't run anything since i <= 20. It wouldn't meet the condition with 21 

/* 
If you would assign 21 value into the i variable, it'll still run and console.log result would be = Number 21
But with the while loop it won't run anything since i <= 20. It wouldn't meet the condition with 21 

We can also use break and continue statements with these Loops as well just like you can with for loop.
*/