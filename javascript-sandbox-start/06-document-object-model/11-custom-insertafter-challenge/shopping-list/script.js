function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}   //If you delete .nextSibling, it will put at the beginning, before Apple.


//New element to insert
const li = document.createElement('li');
li.textContent = 'Insert me After!'

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem); //You'll see that 'Insert me After!' text is replaced after apple!