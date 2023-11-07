//Break 

/* NOTE 
Basically what Break does is it allow us to do just that break out of the loop so usually you're going to check for
a specific condition and then you're gonna break out.
*/

for (let i = 0; i <= 20; i++) { //Let's say we want to stop once we hit 15

    if (i === 15) {
        console.log('Breaking...');
        break;
    }

    console.log(i); //Log result = 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, Breaking...
}

//Continue

/*  NOTE
Basically you can skip the rest of the code in a current iteration and then continue to the next iteration.
*/

for (let i = 0; i <= 15; i++) { //Let's say we want to skip 13th 
    
    if (i === 13) {
        console.log('Skipping 13...');
        continue;
    } 
    
    console.log(i); //console.log result = 0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, Skipping 13..., 14, 15
}