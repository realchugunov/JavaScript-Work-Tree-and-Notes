//  document.getElementById()

console.log(document.getElementById('app-title'));
//Log result = <h1 id="app-title">Shopping List</h1>

console.log(document.getElementById('app-title').getAttribute('id'));
//Log result = app-title

// Set Attributes

    /* Let's say we want to change the id */

    document.getElementById('app-title').id = 'new-id';
    // Before: <h1 id="app-title">Shopping List</h1> After: <h1 id="new-id">Shopping List</h1>

    document.getElementById('new-id').title = 'Shopping List';
    // Log result = <h1 id="new-id" title="Shopping List">Shopping List</h1>

    document.getElementById('app-title').setAttribute('class', 'title');
    /*
    It takes 2 arguments, first is going to be the attribute you want to set
    Second, then what you want to set it to

    log result = <h1 id="new-id" title="Shopping List" class"title"">Shopping List</h1>
    
    If you use this document couple times or back to back, just assign it into a variable
    */
    const title = document.getElementById('app-title');

//  Get/Change content

    console.log(title.textContent); //Log = Shopping List
    //You can also change the title
    title.textContent = 'Hello World'
    // or

    title.innerHTML = 'Hello Again' //Its almost the same thing

    //If you want to use HTML tags:
    title.innerHTML = '<strong>Shopping List</strong>' //Text is strong/bold

// Change Style

    title.style.color = 'red'; //it will change the h1 (title) color to red
    title.style.backgroundColor = 'black';
    title.style.padding = '10px';
    title.style.borderRadius = '10px';

//  document.querySelector

    console.log(document.querySelector('h1'));
    //It'll show h1 along with all styling and all the stuff

    /* 
    querySelector just selects single elements

    In this case (51), it'll select only the first one if there are multiple on the page
    */

    //  Select by Id
    console.log(document.querySelector('#app-title'));
    // Select by class
    console.log(document.querySelector('.container'));
    // Inputs
    console.log(document.querySelector('input[type="text"]'));
    // pseudo - Let's say we want second list item
    console.log(document.querySelector('li:nth-child(2)').innerText); // Orange Juice

    const secondItem = document.querySelector('li:nth-child(2)')
    secondItem.innerText = 'Apple Juice' 
    //If we want to change the color of it:
    secondItem.style.color = 'red';

//  Use these methods on other elements

    const list = document.querySelector('li');
    //You do not have to use document whenever you'll edit it:
    const firstItem = list.querySelector('li')
    firstItem.style.color = 'blue'

    /* NOTE 
    So you can use querySelector on any element, it doesn't have to be just on the document 
    */

    