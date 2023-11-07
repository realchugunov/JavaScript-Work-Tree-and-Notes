function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child'); //It'll select the first child even though we didn't determined the index

    const li = document.createElement('li');
    //now we want to create a list item to replace it 
    li.textContent = 'Replaced First';
    // now to replace, we'll use the replaceWith function/method
    // we call that on our first item because that is what we want to replace.
    firstItem.replaceWith(li);

}

function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');

    /* NOTE
    In this function, we'll use outerHTML. That pertains to the HTML that's in the element. 
    outerHTML will also include the HTML for that element, so in this case its 'li' tag
    */

    secondItem.outerHTML = '<li>Replaced Second</li>';
}

replaceFirstItem(); // Now, apple is gone and we have 'Replaced First' item as first item.
replaceSecondItem(); //Now, Orange Juice is gone and we have 'Replaced Second' item as second item.

// Replacing all of the items in the list
    function replaceAllItems() {
        const lis = document.querySelectorAll('li');
        //  since querySelectorAll returns a node list, we can use forEach on that
        lis.forEach((item, index) => {
            //for each item we'll set the outerHTML
            //item.outerHTML = '<li>Replace All</li>';
                // Also you can use innerHTML instead of outerHTML
            item.innerHTML = 'Replace All';
            //If we want to choose a specific item and do something else, we could do:
            if (index === 1) {
                item.innerHTML ='Second Item';
            } else {
                item.innerHTML = 'Replace All';
            }

            // Shorter Version
            lis.forEach((item, index) => {  item.outerHTML = item === 1 ? '<li>Replace Second</li>' : '<li>Replace All</li>'; });
        })
    }

/*  NOTE 
Another way that we can replace something is by selecting 
the parentElement and then using a method called replaceChild
*/

function replaceChildHeading() {
    /*
    In the html file, we have a header element and inside of the element header, we have h1 tag. Let's replace it to h2
    The way this works is, we select the parent which is the header then we select the item we want to replace and then
    we're replacing it with the new item.
    */

    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    // Let's add an ID
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';

    header.replaceChild(h2, h1);

}


replaceAllItems(); // Now, all of the items in the list replaced with name 'Replace All',
replaceChildHeading();