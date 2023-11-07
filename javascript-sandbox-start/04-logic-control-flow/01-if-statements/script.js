//Blocks like if statements have their own scope
x = 10;
y = 5;

if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`) //console.log result = 20 is 20 ( you can access to it )
}
console.log(z) //console.log result = z is not defined.