/*
    We know how to add an event listener onto a single element but what about when there is multiple elements?
*/

// Add eventListener on to every one
const listItems = document.querySelectorAll('li');

/*
listItems.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.target);
        e.target.remove(); // If you click on Orange juice it'll goes away and ofc it's just in the DOMs, its only in our browser.
    });
})
*/


/* 
Instead of using this ^ way, we can use event delegation to basically add just a single event listener onto the parent 
and then the target whichever one we want to delete.
*/

list.addEventListener('click', (e) => {
    console.log(e.target); // It'll still give us list item 
    /*
        target will give us what we click on, currentTarget will give us what the eventListener is on.
    */
   if (e.target.tagName === 'LI') {
    e.target.remove(); // If you click any of these list items, it'll just delete them. 
   }
});

// and of course you're not limited only to delete list items:
list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = red; // If you hover your mouse on the list items, it'll turn to red
    }
})

