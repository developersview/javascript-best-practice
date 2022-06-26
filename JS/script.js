/* Values and Variables */
/* -------------------------------------------------- */
let js = 'Amazing';
// if (js === 'Amazing') alert("JS is fun!!");
console.log(58 + 98 + 62 - 78);

// Values and Variables
console.log("Jonas");
console.log(23);
let firstName = "Matilda";
let PI = 3.1415;
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(PI);

//Assignement - Values and Variables
let country = 'INDIA';
let continent = 'Asia';
let population = 98956497662;

console.log(country + " " + continent + " " + population);

/* Data Types */
/* -------------------------------------------------- */
//Object
let person = {
    name: 'Jonas',
    age: 24
};
console.log(person);
console.log(typeof person);
console.log(typeof person.name);
console.log(typeof person.age);
//boolean
let isEmpty = true;
console.log(isEmpty);
console.log(typeof isEmpty);
//undefined
let salary;
console.log(salary);
console.log(typeof salary);
//null
let i = null;
console.log(i);
console.log(typeof i);

/* let, const, var */
/* -------------------------------------------------- */
let age = 30;
age = 31;
console.log(age);
const birthyear = 1998;
// birthyear = 2001; (not possible)
console.log(birthyear);
// var is a old way of defining variables prior to ES6
var job = 'Programmer';
var job = 'Analyst';
console.log(job);

/* Basic Operator */
/* -------------------------------------------------- */
//Math Operators
const now = 2022;
let agePranoy = now - 1998;
let ageJonas = now - 1977;
console.log(agePranoy);
console.log(ageJonas);