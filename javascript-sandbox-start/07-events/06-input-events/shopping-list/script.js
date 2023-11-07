const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput (e) {
    console.log('Input');
    console.log(e.target.value); // If we start to type in 'Enter Item' section, you'll see that it'll give us whatever is in the form field.
    heading.textContent = e.target.value; // whatever you type in the field, it'll also type on the h1/header
}
/*
If we go on website and type something on 'Enter Item' section, you'll see it's going to fire off every time we hit a key.
*/

itemInput.addEventListener('input', onInput);
/*
You can use keydown but I would suggest not, I'd suggest using the 'input' event, which in
this case will do the same thing, it fires off whenever we type in but you can also use this
on other input fields. Like a Select List, like a keydown isn't going to work for a Select List
because we're not pushing any key.
*/

// priorityInput = Select List on Webpage
    priorityInput.addEventListener('input', onInput);
    /*
    It'll fire this input event and onInput function will run and we can still get the target.value with this select list.
    So, if we choose 2 we'll see h1 is actually outputting 2, whatever we choose.
    */

// checkbox
    /* 
    checkbox work a little differently, instead of using e.target.value, there is actually an e.target.checked 
    */

function onChecked (e) {
    const isChecked = e.target.checked
    heading.textContent = isChecked ? 'Checked' : 'Not checked';
}
/*
So, when we select the box, we'll see that it would get 'true' in the console. If we unchecked/Unselect the box, we'll get 'false' in the console.
*/

checkbox.addEventListener('input', onChecked);

/*
Now there is 2 other input events that we'll do, and that's focus and blur which has to do with clicking in and activating
the input and clicking out of it and unactivating.
So, clicking in it is going to be 'focus' and clicking outside is going to be 'blur'
*/

function onFocus () {
    console.log('Input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';
}

function onBlur () {
    console.log('Input is not focused');
    itemInput.style.outlineStyle = 'none';
}


itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
/*
1)Usually the reason that you would use this is like you want to have a specific outline or something like that.
2)You would use this for styling.
*/