//STEP 1
const library = [
    { 
        title: "The Road Ahead",
        autor: "Bill Gates",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    { 
        title: "Steve Jobs",
        autor: "Walter Isaacson",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    { 
        title: "Mockingjay",
        autor: "Suzan Collins",
        status: {
            own: true,
            reading: false,
            read: false
        }
    }
]

//STEP 2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//STEP 3
const { title: firstBook} = library[0];

//STEP 4
const libraryJSON = JSON.stringify(library);

