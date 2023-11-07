//  What are Events?
    /*
        Actions or occurrences that happen in the system you are programming, which
        the system tells you about so your code can react to them.
    */

const clearBtn = document.querySelector('#clearBtn');

// JavaScript Event Listener
    // First Method
    clearBtn.onclick = function () {
        console.log('Clear Items') // If you press "clear" button, it will alert "Clear Items" on the page.
    }

    // Add Event Listener
    // Second Method (Modern and Suggested)
    clearBtn.addEventListener('click', function () {    // first, it takes type of event which is we want "click" and the second one is callback function
        alert('Clear Items')
    })

    // Also, you can pass a named function instead of anonymous function:
    
    function onClear() {
        const itemList = document.querySelector('ul');
        //itemList.innerHTML = ''; // these 2 line is easiest to clean the list

        // Second Method
        const items = itemList.querySelectorAll('li');
        //items.forEach(() => item.remove());

        // Most performant way to delete multiple items
        while (itemList.firstChild) { // Use the firstChild property to just check to see if there is a first child, if there is a first child that means that there is a list item.
            itemList.removeChild(itemList.firstChild);
        }
    }
    
    clearBtn.addEventListener('click', onClear); // !! If you do this, do not put paranthesis on the function because it'll execute it instantly.

    /*  NOTE:
        There is a remove event listener method and you do not have to use it every time you add an event listener.
        Where do you want to use it is, when you have an element that you're removing from the DOM like we learned
        about the remove method (removeChild etc.) if you're doing that then it's a good idea to remove the
        eventListener first.   
    */

    setTimeout(() => clearBtn.removeEventListener ('click', onClear), 5000) 
    //It takes function and then it also takes in the number of milliseconds that we want to wait to fire this function off