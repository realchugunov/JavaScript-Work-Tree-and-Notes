const form = document.getElementById('item-form');

function onSubmit (e) {
    e.preventDefault();
    console.log(form);

    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    // we want to make sure that field is filled

    if (item === '' || priority === 0) {
        alert('Please fill in all fields');
        return;
    }
    // priority is set to 0 in HTML, check Line 36 in index.html
}

/*
    If we put something in the field and then click '+Add Item' button, you'll see that 'submit' will flashed real quick, that is because
    it did do the console log but it's submitted to actual file. If you don't have an action attribute on your form where you submitting to
    some kind of backend, then it's going to submit to this the same page. To stop that we'll use preventDefault() at line 4.

    Now if we add 'Milk' again, you'll se that it doesn't submit to the file.

    Now obviously, if you're doing this, you're going to want to get the values that are being submitted to the form. So, there is actually
    a few ways to do that, first => line 7,8
*/

form.addEventListener('submit', onSubmit);