/* 
2 Method, remove and removeChild
remove is going to be called on the element you want to remove
removeChild is called on the parent element and then you pass in the item you want to remove
*/

function removeClearButton() {
    const clearBtn = document.querySelector('#clear')
    clearBtn.remove();
}

function removeFirstItem() {
    //since we're using removeChild, we want to get the parent which is the 'ul'
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

removeClearButton(); // now our 'clear' button is gone.
//removeFirstItem(); // Apples is gone

function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

removeItem(1); //   Apples gone
removeItem(2); //   Orange Juice gone

/* Instead of passing variable into the pseudo selector, we're gonna use querySelectorAll, 
   because what that gives us is if I select li's, is an array like structure called a node list
   and we can access the index, so we can do like this
*/

function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1];

    ul.removeChild(li);
}
removeItem2(1); //  Apples is gone because we determined that querySelectorAll('li)[itemNumber - 1] we subtract 1 from the itemNumber because itemNumber is not 0 based.

function removeItem3() {
    //  We'll use remove here instead of removeChild, so we don't have to worry about parent
    const li = document.querySelectorAll('li');
    // then we can simply do li which is a node list/which is array like, subtracting 1 because it is not 0 based.
    li[itemNumber - 1].remove();
}
removeItem3(1); //It'll get rid of apples.

//  Shorter version of Line 46 function
const removeItem4 = (itemNumber) => 
    document.querySelectorAll('li')[itemNumber - 1].remove();

removeItem4(2);