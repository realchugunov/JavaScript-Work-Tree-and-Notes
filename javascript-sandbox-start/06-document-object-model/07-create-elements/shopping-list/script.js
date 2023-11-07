const div = document.createElement('div');  // Log = <div></div>

div.className = 'my-element'; // we assigned class into the div, log = <div class="my-element"></div>

div.id = 'my-element'; // we assigned id into the div, log = <div id="my-element" class="my-element"></div>

div.setAttribute('title', 'My Element') //  Added title to the div, log = <div id="my-element" class="my-element" title="My Element"></div>

//div.innerText = 'Hello World!'; // Log = <div id="my-element" class="my-element" title="My Element">Hello World</div>

/*  NOTE for line 9:
    Using innerText is not the best way to do this (9) when creating a new element. InnerText is really meant to get
    and change the text of an already existing element. It is better to create a new text node wit the create text node method,
    then append it to the element
*/

const text = document.createTextNode('Hello World');
div.appendChild(text); // Log = <div id="my-element" class="my-element" title="My Element">Hello World</div>

console.log(div); 

