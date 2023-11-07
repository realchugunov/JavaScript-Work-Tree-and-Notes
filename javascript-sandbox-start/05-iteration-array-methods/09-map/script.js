const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); //Log result = (5) [2, 4, 6, 8, 10]

//If you want to do this with forEach:

const doubleNumbers = [];

numbers.forEach(number => doubleNumbers.push(number * 2));

console.log(doubleNumbers); //Log result = (5) [2, 4, 6, 8, 10]

//////////////////////////////

const companies = [
    {   name: 'Company One', category: 'Finance', start: 1981, end: 2004   },
    {   name: 'Company Two', category: 'Retail', start: 1992, end: 2008    },
    {   name: 'Company Three', category: 'Auto', start: 1999, end: 2007    },
    {   name: 'Company Four', category: 'Retail', start: 1989, end: 2010   },
    {   name: 'Company Five', category: 'Technology', start: 2009, end: 2014    },
    {   name: 'Company Six', category: 'Finance', start: 1987, end: 2010   },
    {   name: 'Company Seven', category: 'Auto', start: 1986, end: 1996    },
    {   name: 'Company Eight', category: 'Technology', start: 2011, end: 2016    },
    {   name: 'Company Nine', category: 'Retail', start: 1981, end: 1989   },

];

// Create an array of company names

const companyNames = companies.map(company => company.name);

console.log(companyNames);

// Create an array with just company and category

const companyInfo = companies.map(company => {
    return {
        name: company.name,
        category: company.category
    };
});

console.log(companyInfo);

// Create an array of objects with the name and the length of each company in years

const companyYears = companies.map(company => {
    return {
        name: company.name,
        length: company.end - company.start
    };
});

console.log(companyYears);

// Chain map methods
    /* Let's say we want to take a number, we want to square root and then double it */

    const squareAndDouble = numbers
    .map(number => Math.sqrt(number))
    .map(sqrt => sqrt * 2)

    console.log(squareAndDouble); //It'll just give us square roots, now we want to double it that is where we'll add / chain another map

// You can also chain with the other methods | Chaining Multiple Methods
    /* Let's say we want to first of all filter out and just get the even numbers then double those even numbers */

    const evenDouble = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2)

    console.log(evenDouble); //Log result = [ 2, 4, 6, 8, 10 ], after we chain .map new log result = [ 4, 8, 12, 16, 20 ]

    



