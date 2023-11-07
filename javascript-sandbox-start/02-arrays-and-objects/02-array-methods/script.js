//Push a value at the end of the array
const arr = [21, 15, 71, 58]
arr.push(100);
console.log(arr); //console.log result will be = (5) [21, 15, 71, 58, 100]

//Take off the last value at the end of the array
arr.pop() //console.log result will be = (4) [21, 15, 71, 58]

//Add a value to the beginning of the array
arr.unshift(7); //console.log result will be = (5) [7, 21, 15, 71, 58]

//Take off the first value at the beginning of the array
arr.shift(); //console.log result will be = (4) [21, 15, 71, 58]

//Reverse the array
arr.reverse(); //console.log result will be = (4) [58, 71, 15, 21]

//THESE ARE USED TO MANIPULATE THE ARRAY

//We can use to get something from the array either get a value from it or just get some information.
const myArray = [21, 15, 71, 58]
let x;
x = myArray.includes(71) //console.log result will be = true, you'll always get true or false from this based on if the value in or not.
x = myArray.includes(711) //console.log result will be = false

//Get index of a specific value 
x = indexOf(58); //console.log result will be = 3. Because the number 58 is at the 3rd index in the array.
x = indexOf(60); //console.log result will be = -1 If the value you passed in is not in the array, it will give you -1 value all the time.

//Return selected elements in the array.
//First method slice();
x = myArray.slice(); //what slice takes in is the first is going to be the start index. "Where do you want to start in the Array?"
                    //Let's say we want to start at 1 index;
                    x = myArray.slice(1) //If you do not pass the second value, it'll just give you the rest of the number from start at index 1
                                         //Console.log result will be = [15, 71, 58]
                    //Let's say we want to get just 15, 71
                    x = myArray.slice(1, 3) //console.log result will be = [15, 71];
                    //Keep in mind that slice does not change the main array.

//Second method splice();
const Array = [21, 15, 71, 58, 91, 66]
x = Array.splice(); //You can do kind of the same thing but it does manipulate the original Array.
                      //First is the starting index just like with slice, the second is the number of elements that we want to go over.

                      //Let's say we want to start at index 1 which is number 15, and we want to go over fourth element.
                      x = Array.splice(1, 4) //console.log result will be = (4) [15, 71, 58, 91]
                      console.log(Array);    //Now the main array only has = (2) [21, 66]

                      //Let's say we want to get rid of any number, for instance 91
                      x = Array.splice(4, 1) //console.log result will be (5) [21, 15, 71, 58, 66]
                      console.log(Array) // The Array does not have number 91 anymore because we took it out.
