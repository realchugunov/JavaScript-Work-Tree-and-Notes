//Default Parameter
function registerUser(user = 'Bot') {
    
    return user + ' is registered' 
}

console.log(registerUser()); //console.log result will be = Bot is registered

//Rest Parameter
function sum(...numbers) {
    let total = 0;

    for (const num of numbers) {
        total+= num;
    }

    return total;
}

console.log(sum(1, 2, 3, 4, 5)); //console.log result will be = 15

//Objects as Parameters
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`
}

const user = {
    id: 1,
    name: 'John'
};

console.log(loginUser(user)); //console.log result will be = The user John with the id of 1 is logged in

                                        /* 
                                        Or you can just pass in like this:
                                        */

console.log(loginUser({     //console.log result will be = The user Sara with the id of 2 is logged in
    id: 2,
    name: 'Sara'
}))

//Arrays as parameters

function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    
    const item = arr[randomIndex];

    console.log(item); //console.log result will be = random number up to 10
}

getRandom([1,2,3,4,5,6,7,8,9,10]);