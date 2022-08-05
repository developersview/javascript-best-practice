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