//  Let's pick something on the page to assign these event listeners to, we're going to use Logo
const logo = document.querySelector('img');

const onClick = () => console.log('click event')
const onDoubleClick = () => console.log('Double click event');
const onRightClick = () => console.log('Right click event');
const onMouseDown = () => console.log('Mouse down Event');
const onMouseUp = () => console.log('Mouse up Event');
const onMouseWheel = () => console.log('Mouse wheel Event');
const onMouseOver = () => console.log('Mouse over Event');
const onMouseOut = () => console.log('Mouse out Event');
const onDragStart = () => console.log('Drag start Event');
const onDrag = () => console.log('On Drag Event');
const onDragEnd = () => console.log('Drag end Event');
// Event Listeners
logo.addEventListener('click', onClick) // If you come over logo with your mouse crosshair and click on the logo, it'll log click event in the console.log
    // Double Click
    logo.addEventListener('dblclick', onDoubleClick); // If you double click, you'll get two click events but it also gonna fire off the double click event.
    // Right Click
    logo.addEventListener('contextmenu', onRightClick);
    // Mouse Down & Mouse Up
    logo.addEventListener('mouseDown', onMouseDown); // Mouse down is just when you hold it down.
    logo.addEventListener('mouseDown', onMouseUp);
    // Mouse Wheel
    logo.addEventListener('wheel', onMouseWheel);
    // Mouse over (hover) & Mouse out 
    logo.addEventListener('wheel', onMouseOver); 
    logo.addEventListener('wheel', onMouseOut);
    // Dragging
    logo.addEventListener('dragstart', onDragStart); // Click and hold then move it somewhere.
    logo.addEventListener('drag', onDrag); // as long as you holding on to it, even if we don't move barely its still just going to keep firing off
    logo.addEventListener('dragend', onDragEnd); // It'll keep dragging until you let it go.