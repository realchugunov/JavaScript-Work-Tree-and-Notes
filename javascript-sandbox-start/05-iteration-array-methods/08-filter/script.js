/*
    The difference between forEach, filter is along with a bunch of other high order array methods actually
    returns something. In most cases they're going to return an array, modified array.
*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6) //It looks longer words than 6

console.log(result); //expected output: Array ["exuberant", "destruction", "present"];

//Another instance:

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Let's say we want to filter out all the odd numbers, so we just want the even (divisible by 2) numbers.

/*const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0; //If it's divisible by 2, then obviously it's even.
});*/

//console.log(evenNumbers); Log result = (5) [2, 4, 6, 8, 10]

//  Shorter Way
const evenNumbers = numbers.filter(number => number % 2 === 0); //Log result will be the same as line (20)

console.log(evenNumbers);

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

//Get only Retail Companies

const retailCompanies = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies);

//Get companies that started in or after 1980 and ended in or before 2005

const startEndDate = companies.filter(company => company.start >= 1980 && company.start <= 2005)
console.log(startEndDate);

//Get companies that lasted 10 years or more
const longCompanies = companies.filter(company => company.end - company.start >= 10)
console.log(longCompanies);