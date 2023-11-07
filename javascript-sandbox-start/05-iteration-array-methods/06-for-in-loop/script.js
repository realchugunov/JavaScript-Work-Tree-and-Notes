/* 
    There may be times where you want to actually loop through an object's values and we can do that with
    the for in loop.
*/

const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green'
};

for (const key in colorObj) {
    console.log(key); //Log result = color1, color2, color3, color4;
    //If we want to get values, take the color object variable and then pass in key word inside of array
    console.log(key, colorObj[key]); //Log result = color1 red, color2 blue, color3 orange, color4 green.
}

/* 
    Let's say we want to use this^ with an array because we can use for in loops with arrays:
*/

const colorArr = ['red', 'green', 'blue', 'yellow']

for (const /*color*/ key in colorArr) {
    console.log(color); //Log result = 0, 1, 2, 3   it's giving us the keys
    console.log(colorArr[key]); //Log result = red, green, blue, yellow
}