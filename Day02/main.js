// 1.
let challenge = '30 Days of Javascript';

// 2.
console.log(challenge);

// 3.
console.log(challenge.length);

// 4.
console.log(challenge.toUpperCase());

// 5.
console.log(challenge.toLowerCase());

// 6.
console.log(challenge.substr(3,5));

// 7.
console.log(challenge.substr(3,20));

// 8. 
console.log(challenge.includes('script'));

// 9.
console.log(challenge.split());

// 10. 
console.log(challenge.split(' '));

// 11.
let string = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(string.split(','));

// 12.
console.log(challenge.replace('Javascript','Python'));

// 13.
console.log(challenge.charAt(15));

// 14.
console.log(challenge.charCodeAt('J'));

// 15. 
console.log(challenge.indexOf('a'));

// 16.
console.log(challenge.lastIndexOf('a'));

// 17.
let first = 'You cannot end a sentence with because because because is a conjunction';
console.log(first.indexOf('because'));

// 18.
let last = 'You cannot end a sentence with because because because is a conjunction';
console.log(last.lastIndexOf('because'));

// 19.
let search = 'You cannot end a sentence with because because because is a conjunction';
console.log(search.search('because'));

// 20.
let trim = ' 30 Days Of JavaScript '
console.log(trim.trim());

