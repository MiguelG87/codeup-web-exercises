"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//<---------------------------- .filter Users w/3 or more languages-------------------------------------------->
var numberUsers = users.filter(user => user.languages.length >= 3);
console.log(numberUsers);

//<---------------------------- .map User email address-------------------------------------------------------->
let emailAddresses = users.map(user => user.email);
console.log(emailAddresses);

//<---------------------------- .reduce Years of Experience--------------------------------------------------->
let totalYears = users.reduce((total, user) => {
    total += user.yearsOfExperience;
    return total;
}, 0);
let averageTotal = totalYears/ users.length;
console.log("Total years of experience: ", totalYears);
console.log("Average years of experience: ",averageTotal);

//<---------------------------- .reduce Longest Email from list--------------------------------------------------->
let longestEmail = users.reduce((accumulator, user) => {
    if (accumulator.length > user.email.length) {
        return accumulator;
    } else {
        return user.email;
    }
}, '')
console.log(longestEmail);

//<---------------------------- .reduce All users in a list--------------------------------------------------->
let userNames = users.reduce((finalStr, user) => {
    finalStr += user.name + ", "
    return finalStr;
}, 'Your instructors are: ');
console.log(userNames);