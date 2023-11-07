//  Get child elements from the parent
let output;

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1]; // We can access it like that, log result = Child 2, because index is 0 based.

console.log('output'); //It'll give us an HTML collection which is an array like structure of all the child divs in.

    // We can change things
    parent.children[1].innerText = 'Child Two'; //It'll replace 'Child 2' to 'Child Two'
    // Add style
    parent.children[1].style.color = 'red';
    // Property - firstElementChild
    parent.firstElementChild.innerText = 'Child One' //It'll change the first one 'Child 1' to 'Child One'
    // Property - lastElementChild
    parent.lastElementChild.innerText = 'Child Three' //It'll change the last one 'Child 3' to 'Child Three'

//  Get parent elements from child
    const child = document.querySelector('.child');

    output = child.parentElement; 
    console.log(output); // it'll output the parent, <div class="parent">...</div>

    //Let's say we want to add border around the parent div from the child
    child.parentElement.style.border = '1px solid #ccc';
    child.parentElement.style.padding = '10px';
    console.log(output); 
    /* Output
        <div class="parent" style="border: 1px solid rgb(204, 204, 204); padding: 10px;">
            <!-- Children -->
            <div class="child">Child One</div>
            <div class="child" style="color: red;">Child Two</div>
            <div class="child">Child Three</div>
        </div>
    */

// Sibling Elements
    const secondItem = document.querySelector('.child:nth-child(2)'); //We want the second one, it'll give us the second item
    output = secondItem;
    console.log(output);
    /*  Output 
        <div class="child">Child Two</div>
    */

    //If we want to access to next sibling from the second item
    output = secondItem;
    output = secondItem.nextElementSibling;
    /*  Output 
        <div class="child">Child Three</div>
    */

        secondItem.nextElementSibling.style.color = 'green';
    
    // Previous Element Sibling
    secondItem.previousElementSibling.style.color = 'orange';
    console.log(output); // first child is now Orange