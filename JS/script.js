import open from "open";
/* Values and Variables */
/* -------------------------------------------------- */
let js = "Amazing";
// if (js === 'Amazing') alert("JS is fun!!");
console.log(58 + 98 + 62 - 78);

// Values and Variables
console.log("Jonas");
console.log(23);
let Name = "Matilda";
let PI = 3.1415;
console.log(Name);
console.log(Name);
console.log(Name);
console.log(PI);

//Assignement - Values and Variables
let country = "INDIA";
let continent = "Asia";
let population = 98956497662;

console.log(country + " " + continent + " " + population);

/* Data Types */
/* -------------------------------------------------- */
//Object
let person = {
    name: "Jonas",
    age: 24,
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
var job = "Programmer";
var job = "Analyst";
console.log(job);

/* Basic Operator */
/* -------------------------------------------------- */
//Math Operators
const now = 2022;
let agePranoy = now - 1998;
let ageJonas = now - 1977;
console.log(agePranoy, ageJonas);
console.log(agePranoy * 2, ageJonas / 10);
console.log(2 ** 3);

// Assignment operators
console.log("Assignment operators");
let x = 10 + 5;
console.log(x);
x += 10;
console.log(x);
x *= 4;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
x--;
console.log(x);

// Comparison operators
console.log(agePranoy > ageJonas);
console.log(agePranoy >= 24);
const isFullAge = ageJonas >= 18;
console.log(now - 1991 > now - 2018);
let a, b;
a = b = 25 - 10 - 5; // x = y = 10, x = 10
console.log(a, b);
const averageAge = (agePranoy + ageJonas) / 2;
console.log(agePranoy, ageJonas, averageAge);

/* Strings and Template Literals */
/* -------------------------------------------------- */
const firstName = "Pranoy";
const myJob = "Software Engineer";
const birthYear = 1998;
const currentYear = 2022;

const pranoy =
    "I am " +
    firstName +
    ", a " +
    (currentYear - birthYear) +
    " years old " +
    myJob;
console.log(pranoy);
const pranoyNew = `I am ${firstName}, a ${
  currentYear - birthYear
} years old ${myJob}`;
console.log(pranoyNew);

/* If Else */
/* -------------------------------------------------- */
const myAge = 24;
const isOldEnough = age >= 18;
//const { open } = pkg;
if (myAge >= 18) {
    console.log(`Applicable for Driving license 🚗`);
    //open("https://parivahan.gov.in/");
} else {
    console.log(`Not applicable for driving license 😔😓`);
}

/* Type Conversion */
/* -------------------------------------------------- */
//explicit
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Pranoy"));
console.log(typeof NaN);
console.log(String(98), 98, "98");
let c = 123;
console.log(c.toExponential());

/* Type Coercion */
/* -------------------------------------------------- */
console.log("98" - "56" - 10);
console.log("98" - "56" - 10 + "24");
console.log("50" * "2");
console.log("50" < "2");

/* Truthy and Falsy Values */
/* -------------------------------------------------- */
// 5 falsy values :0, '', undefined, null, NaN
console.log("******* Truthy & Falsy Values ***********");
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("Pranoy"));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Dont spend at all!");
} else {
    console.log("Get a Job soon!");
}

let height;
if (height) {
    console.log("Height is defined!");
} else {
    console.log(`Height is ${typeof height}`);
}

/* Equality operators == vs === */
/* -------------------------------------------------- */
const age1 = 18;
if (age1 === 18) console.log("You are an adult!");

/*Logical Operator*/
/* -------------------------------------------------- */
const hasDriverLicense = false;
const hasGoodVision = true;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);