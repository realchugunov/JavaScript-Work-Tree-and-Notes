//Switch is another way to evaluate expressions and values.
const d = new Date(2023, 1, 10, 8, 0, 0)
const month = d.getMonth();
const hour = d.getHours(); 

switch (month) {
    case 1:
        console.log('It is January')
        break; //this is kind of return statement, it just breaks out of this case.
    case 2:
        console.log('It is February');
        break;
    case 3:
        console.log('It is March');
    //If it doesn't match with any of these, what you gonna do is put default end of the cases.
    default: //whatever you put in this, default will happen if it doesn't match any one of those cases.
        console.log('It is not January, February or March.') //We don't need to put a break on the default.
}

//Or you can do something like this
switch (true) {
    case hour < 12:
        console.log('Good Morning!') 
    break;

    case hour < 18:
        console.log('Good Afternoon')
    break;

    default:
        console.log('Good Night!')
}

