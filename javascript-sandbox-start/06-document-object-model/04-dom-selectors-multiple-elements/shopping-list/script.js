//  querySelectorAll()

    const listItems = document.querySelectorAll('.item');
    /* NOTE
        What it gives us is a node list and node list is an array like structure, much like an HTML collection.

        One key difference is, you can use high order array methods on a node list but you can't do it with an HTML collection.
        With an HTML collection, you would have to first convert it to an array

    */

    //If you want an individual item, just like an array, you can use bracket syntax
    console.log(listItems[1]); 
    //It'll give us the second element. Let's say we just want to text:
    console.log(listItems[1].innerText); // Orange Juice

    //Let's say we want to make the color of these red:
    listItems.style.color = 'red'; // !!!That is not gonna work because we're trying to access style on a node list!!!
    // Instead, you can just do this:
    listItems[1].style.color = 'red';

    // What would we do if we want to change all of their color is:
    listItems.forEach(item => {
        item.style.color = 'red';
    })
    // Now all the list items are red!


//  Let's say we want to select all these with the getElements by class name:
    const listItems2 = document.getElementsByClassName('item');
    console.log(listItems2);
    //We'll get an HTML collection as opposed to node list. You can still access to a specific item:
    console.log(listItems2[2].innerHTML); // Oreos


// If you have an HTML collection and you want to use forEach or any other method, you want to first convert it to an array:

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach(item => {
    console.log(item.innerText);
})

// Get Elements by Tag Name

const listItems3 = document.getElementsByTagName('li');
console.log(listItems3); 