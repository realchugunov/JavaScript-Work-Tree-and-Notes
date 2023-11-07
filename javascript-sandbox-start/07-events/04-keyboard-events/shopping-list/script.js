// Key Down, Key Up, Key Press, let's start off by bringing in that input.
const item = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('Key Press') // It fires off if I let go the key, nothing else happens.
                            // It's basically as when you tap any key it fires off that event just once.
};

const onKeyUp = (e) => {
    console.log('Key Up'); // Hit a key and hold it and nothing happens yet but when you release then that fires the key up event.
}

const onKeyDown = (e) => {
    console.log('Key Down'); // Select random key, H, hold it down, now notice it fires off but it keeps firing off as we're holding it down until we release.
    //  key
    console.log(e.key); // It'll log in the console whatever we press on keyboard.
        /* you can do multiple things with it, for instance: */

        if (e.key === 'Enter') {
            alert('You pressed Enter');
        }

    // keyCode
        // https://www.toptal.com/developers/keycode/table-of-all-keycodes/ ----- it is key codes of each key on keyboard
        if (e.keyCode === 13) {
            alert('You pressed Enter');
        }
    
    // code
    console.log(e.code); // If we hit letter F it'll say keyF, random key, D, it'll log keyD, if you hit 1, it'll log digit1

    if (e.code === 'Digit1') {
        console.log('You pressed 1');
    }

    console.log('Shift: ' + e.shiftKey); // d = false, D = true
    console.log('Control ' + e.ctrlKey);
    console.log('Alt: ', + e.altKey);

    if (e.shiftKey && e.key === 'K') {
        console.log('You hit shift + K');
    }

}



/*
    The difference between 'keypress' and 'keydown' is, basically if you were tap it once where keydown it's going to keep going if
    you hold it down.
*/

itemInput.addEventListener('keypress', onKeyPress); // So when that 'keypress' fires off, we're going to run a function called onKeyPress.
itemInput.addEventListener('keypress', onKeyUp);
itemInput.addEventListener('keypress', onKeyDown);
