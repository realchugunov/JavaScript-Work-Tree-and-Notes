// Clean Way

function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item)); // We created the list

    const button = document.createElement('button'); //We created the button
    button.className = 'remove-item btn-link text-red' // We gave class names

    const icon = document.createElement('i'); // We created <i></i> element
    icon.className = 'fa-solid fa-plus' // we gave class names

    button.appendChild('icon'); // Icon needs to go inside button
    li.appendChild('button'); // Button needs to go inside list item

    document.querySelector('.items').appendChild('li'); // Now cheese is added to the list
}