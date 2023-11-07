//Challenge 1
let temperature;
const getCelsius = (f) => { 
    const celsius = (f - 32) * 5 / 9;
    return celsius; 
};

console.log(getCelsius(50)); //console.log result = 10


//Challenge 2
const minMax = (num) => { 
    const min = Math.min(...num);
    const max = Math.max(...num);
    console.log(min, max);

    return {
        min,
        max,
    };
}

console.log(minMax([1, 2, 3, 4, 5])); //console.log result will be = {min: 1, max: 5}

//Challenge 3
(function (length, width) { 
    const area = length * width

    const output = `The area of a rectangle with a length of ${length} and width of ${width} is ${area}`
    console.log(output); //console.log result = The area of a rectangle with a length of 10 and width of 5 is 50
})(10, 5)


