//  Parent Node
    let output;

    const child = document.querySelector('.child');

    output = child.parentNode;
    output = child.parentElement; //We'll get the same exact thing

    child.parentNode.style.backgroundColor = '#ccc'; //It'll set the background color to gray 
    child.parentNode.style.padding = '10px';  

    console.log(output); // console.log = <div class="parent">...</div>

// Siblings

    const secondItem = document.querySelector('.child:nth-child(2)');

    output = secondItem  // console.log = <div class="child">Child 2</div>
    
    //  Get next/previous sibling

    output = secondItem.nextSibling; // log = #text, It's a text node because of white space

    output = secondItem.previousSibling; // log = #text, It's a text node because of white space

    console.log(output);