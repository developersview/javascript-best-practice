/* Activating Strict mode */
/* ---------------------------------------------------- */
"use strict";

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;

if (hasDriverLicense) console.log("I can drive!");

/* Working with Functions */
/* ---------------------------------------------------- */
function fruitProcessor(apple, orange) {
    console.log(apple, orange);
    let Order;
    if (apple === 0 && orange === 0) {
        Order = "Can't make juice!";
    } else if (apple === 1 && orange === 1) {
        Order = `Order : Juice with ${apple} apple and ${orange} orange`;
    } else if (apple > 1 && orange === 1) {
        Order = `Order : Juice with ${apple} apples and ${orange} orange`;
    } else if (apple === 1 && orange > 1) {
        Order = `Order : Juice with ${apple} apple and ${orange} oranges`;
    } else {
        Order = `Order : Juice with ${apple} apples and ${orange} oranges`;
    }
    return Order;
}
const result = fruitProcessor(5, 4);
console.log(result);

/* Working with Arrow Functions */
/* ---------------------------------------------------- */
const calcAge = (birthYear) => 2022 - birthYear;
console.log(`The age is : ${calcAge(1998)}`);

const yearsUntilRetirement = (birthYear, name) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    return `${name} retires in ${retirement} years`;
};
let person1 = {
    name: "Jonas",
    birthYear: 1996,
};
let person2 = {
    name: "Pranoy",
    birthYear: 1998,
};
console.log(yearsUntilRetirement(person1.birthYear, person1.name));
console.log(yearsUntilRetirement(person2.birthYear, person2.name));

/* JavaScirpt Array*/
/* ---------------------------------------------------- */
const names = ["Jonas", "Martha", "Pranoy"];
console.log(names);
const names1 = new Array("Jonas", "Martha", "Pranoy");
console.log(names1);
console.log(names[1], names1[1]);
console.log(names.length);
console.log(names[names.length - 1]);
names[3] = "Tony";
console.log(names);
console.log(names.length);
const firstName = "Pranoy";
const lastName = "Chakraborty";
const age = 24;
const Pranoy = [firstName, lastName, age, names];
console.log(Pranoy);

const birthYears = [1998, 1997, 1992, 2000, 1996, 1989];
birthYears.forEach((element) => {
    console.log(`The age is : ${calcAge(element)}`);
});

/* JavaScirpt Array Methods*/
/* ---------------------------------------------------- */
const friends = ["Jonas", "Martha", "Pranoy", "Noah"];
console.log(friends);
friends.push("Steve");
console.log(friends, friends.length);
friends.unshift("Tony"); // to add a element at the begining of an array
console.log(friends, friends.length);
const popped = friends.pop();
console.log(popped);
friends.shift(); // to remove a element from the beginining of an array
console.log(friends);
console.log(friends.indexOf("Pranoy"));
console.log(friends.indexOf("Steve"));
console.log(friends.includes("Pranoy"));
console.log(friends.includes("Steve"));

friends.includes("Martha") ?
    console.log("You have a friend called Martha") :
    null;

/* Javascript Array*/
/* ---------------------------------------------------- */
const pranoyObject = {
    firstName: "Pranoy",
    lastName: "Chakraborty",
    birthYear: 1998,
    job: "Software Developer",
    friends: ["Natasha", "Steve", "Peter", "Tony"],
};
console.log(pranoyObject.firstName);
console.log(pranoyObject.friends);
console.log(pranoyObject.friends[0]);
pranoyObject.friends.unshift("Wanda");
console.log(pranoyObject.friends);