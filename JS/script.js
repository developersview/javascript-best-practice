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

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/
let mass, height;
let BMI = (mass, height) => (mass / (height ** 2));
let Mark = {
    weight: 78,
    height: 1.69
}
let John = {
    weight: 92,
    height: 1.95
}
let MarkBMI = BMI(Mark.weight, Mark.height);
let JohnBMI = BMI(John.weight, John.height);
console.log("BMI index of Mark:" + Math.ceil(MarkBMI));
console.log("BMI index of John:" + Math.ceil(JohnBMI));
let markHigherBMI = MarkBMI > JohnBMI;
console.log(markHigherBMI);