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
const calcAge = (birthYear, name) => 2022 - birthYear;
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