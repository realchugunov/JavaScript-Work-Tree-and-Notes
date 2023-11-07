// insertAdjacentElement Example
  //Let's say we want to put new item top of the 'Filter Items' on the page.

  function insertElement() {
    const filter = document.querySelector('.filter');
    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    /*
    Then to insert, we'll take the filter and then that's where we call insertAdjacentElement and,
    it's gonna take 2 things, first is going to be the position, second is the element we want to insert
    */

    filter.insertAdjacentElement('beforebegin', h1);
  }

// insertAdjacentText Example

  function insertText() {
    const item = document.querySelector('li:nth-child');
    item.insertAdjacentText('afterend', 'insertAdjacentText');
  }



// insertAdjacentHTML example

function insertHtml() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentHTML</h2>');
}


// insertBefore Example
  /*
  InsertBefore is similar to appendChild method but it's a bit complicated. What you do is
  You're define a parent or you bring in a parent and then you choose the item inside that parent
  that you want to insert your item before.
  */

  function insertBeforeItem() {
    const ul = document.querySelector('ul'); //That is the parent
    //Now we want to create the element we want to insert

    const li = document.createElement('li');
    //  and we're going to add some text to that
    li.textContent = 'InsertBefore'
    // then what we do is, Select an item inside the parent where we want to insert before
    const thirdItem = document.querySelector('li:nth-child(3)');
    // and now what we want to do is, insert our 'li', we want to put it before the third item
    // what is weird about this is you call it on the parent
    ul.insertBefore(li, thirdItem); //first, it'll take your element and then it takes in the reference which is the third item
  }

insertElement(); // You'll see that 'insertAdjacentElement' text now is added top of the 'filter items' section.

insertText(); // Now, 'insertAdjacentText' is added after first element 'apple'
              //If you change 'afterend' to 'beforebegin' text will be top of the 'apple' item

insertHtml(); //It will add the text at the end of the list

insertBeforeItem(); // Oreos was the 3rd item and we choose to insert before that third item so it put our element li before the 3rd item.

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
