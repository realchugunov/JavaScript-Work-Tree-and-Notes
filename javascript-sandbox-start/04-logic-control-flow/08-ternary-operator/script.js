const age = 19;

//Using If statement
if (age >= 18) {
    console.log('You can vote!')
} else {
    console.log('You cant vote!')
}

//Using Ternary Operator

/* 
    >>The first one will be the condition and you can think of '?' is as the if because
        what comes after this what you want to happen if the condition true.

    >>Then for the else statement is that's going to be represented with : 
*/

age >= 18 ? console.log('You can vote!') : console.log('You can not vote!') //So, we're going to get the same result with if statement

//Assigning a conditional value to a variable using Ternary Operator
const canVote = age >= 18 ? true : false; //log = true

//Multiple Statements

const auth = true;

let redirect;

if (auth) {
    alert('Welcome to the Dashboard');
    redirect = '/dashboard';
} else {
    alert('Access Denied!');
    redirect = '/login';
}
console.log(redirect); //log = Welcome to the Dashboard

    //Let's write it with Ternary Operator
    const redirect1 = auth ? 
    (alert('Welcome to the Dashboard'), '/dashboard') 
    : (alert('Access Denied'), '/login')

    //What if you don't want to do anything else? If we're using Ternary we need to have an else
    auth ? console.log('Welcome to the Dashboard') : null; //If auth would be false, we're not going to get anything from it since we put null
    //But the shorthand of this 
    auth && console.log('Welcome to the Dashboard') //Log = Welcome to Dashboard