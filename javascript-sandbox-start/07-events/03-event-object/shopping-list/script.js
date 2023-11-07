/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to (These are the same in this case
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The x position of the mouse click relative to the window
- `clientY` - The y position of the mouse click relative to the window
- `offsetX` - The x position of the mouse click relative to the element
- `offsetY` - The y position of the mouse click relative to the element
- `pageX` - The x position of the mouse click relative to the page
- `pageY` - The y position of the mouse click relative to the page
- `screenX` - The x position of the mouse click relative to the screen
- `screenY` - The y position of the mouse click relative to the screen
*/

//  Let's go ahead and take an element from the DOM, let's just do the logo again
const logo = document.querySelector('img');

function onClick(e) {
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    console.log(e.timeStamp);
    console.log(e.clientX);
    console.log(e.clientY);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e.pageX);
    console.log(e.pageY);
    console.log(e.screenX);
    console.log(e.screenY);
}

/* NOTE for Line 20:
In this case, when we click the logo, we're going to see the image tag in console. Because that is what we clicked on.
You can use this method to do certain things to that element. For Instance,
we could take e.target and then take the style and change the backgroundColor and set that to the black.
*/

/*  NOTE for Line 21:
    It is almost the same thing as Line 20. 
    
    currentTarget is it's whatever the event is attached to. If you click something on the page, it'll log the body event, for instance,
    you clicked on 'apple' word and it'll log the body with the event that attached to it.

    Target is whatever we clicked. If you click something on the page it'll log only whatever you clicked on, for instance
    you clicked on 'apple' word and it'll log the 'li' lists.
*/

/* NOTE for Line 22:
    If we go click the logo, the type is 'click', so that is the type of event that was triggered.
*/

/*  NOTE for Line 23:
    it gives us the time stamp and that is going to change when you click again obviously.
*/

/*  NOTE for Line 24:
    So, the X axis is always going to be Horizontal, so it's from right to left.
*/

/*  NOTE for Line 25:
    Y will be top to bottom.
    Let's click corner of image, we might get different values but what we get is 27 and 58. So what that means is our cursor
    when we click is 27 over from the left on the X axis and 57 down from the Y axis.
*/

/*  NOTE for Line 26 - 27:
    If we click in the left corner of logo, we get 10 and 11, If we go up little bit, we get over to the left 3 and 8.
    If we come way down (bottom of the logo), 42 - 53. So it's the coordinates of where we click within this element.
*/


