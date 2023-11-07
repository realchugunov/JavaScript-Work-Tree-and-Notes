const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run () {
    //  className
    console.log(itemList.className); // log = item-list items , It'll give all of the class names
    //Let's make the paragraph dark color:
    text.className = 'card dark';
    /*  NOTE for Line 9
        
    If you click 'run' button, the background of the paragraph will be a dark color.

    This (9) is always going to overwrite whatever classes you have there.
    If you do this way, you need to make sure that you also put the existing classes.
    To deal with it, we could use classList object which has different methods you can use
    on it to add and remove classes or even toggle classes.

    */
   // classList
   console.log(itemList.classList);
    /*  NOTE for Line 21
        we'll get DOM Token List which is similar to an array. It's basically, an array of 
        our classes and we could even loop through that.
        
        with a DOM Token List you can use methods like forEach.
    
    */

    itemList.classList.forEach((c) => console.log(c)); // log = item-list, items | If we click 'run' button, its just going to log each class.

    text.classList.add('dark'); // added a new class 'dark'.
    text.classList.remove('card'); // removed 'card' class.
    
    text.classList.toggle('dark'); 
        /* 
            If we click on 'run' button, the paragraph turns dark, if we click on it again it then removes the dark class.
            This is also useful for dark-light switcher on Website.
        */

    text.classList.replace('card', 'dark'); // card is gone and dark class has been applied.

    // Change Style
    itemList.style.lineHeight = '3'; // When we click the button, line height is will be applied.

    // Let's do some changes on items
    items.forEach((item, index) => {
        items.style.color = red; // If you click the button, texts will turn into red color.

        // And you can target the specific one:
        if (index === 2) {
            item.style.color = blue; // If you click the button, third item will be blue color.
        }
    })
}

run();
document.querySelector('button').onclick = run;