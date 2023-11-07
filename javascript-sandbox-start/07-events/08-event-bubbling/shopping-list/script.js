/*
    When we add an event listener onto an element, that event moves up the DOM tree and if it's
    find a parent element that has a listener for that event, it'll fire that as well.
    Even we click on button it'll bubble all the way up to document.
*/

const button = document.querySelector('button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
    alert('Button was clicked');
    e.stopPropagation(); // It'll stop the multiple alert for DOM tree
    /*
        You should only call stopPropagation if you have a reason for it.
        
        For instance, if we actually had a parent and child with the same event listener. Don't just call it for the hell of it.
        
        There is also a method called stop immediate propagation and this is used if you have multiple handlers on a single event
        and you want to stop the event for all of them.
    */

});

div.addEventListener('click', () => {
    alert ('Div was clicked');
});

form.addEventListener('click', () => {
    alert ('Form was clicked');
});

document.body.addEventListener('click', () => {
    alert ('Body was clicked');
})