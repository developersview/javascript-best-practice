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

/* Javascript Object*/
/* ---------------------------------------------------- */
const pranoyObject = {
    firstName: "Pranoy",
    lastName: "Chakraborty",
    birthYear: 1998,
    job: "Software Developer",
    friends: ["Natasha", "Steve", "Peter", "Tony"],
    location: "India",
    twitter: "@ig_pranoy",
};
console.log(pranoyObject.firstName); // dot notation
console.log(pranoyObject.friends);
console.log(pranoyObject.friends[0]);
pranoyObject.friends.unshift("Wanda");
console.log(pranoyObject.friends);
console.log(pranoyObject);
const namekey = "Name";
console.log(pranoyObject["first" + namekey]); // bracket notation
console.log(pranoyObject["last" + namekey]);

/*  const interestedIn = prompt(
    "What you want to know about Pranoy? Choose between firstName, lastName, job, age, friends, location and twitter"
);

if (interestedIn === "age") {
    alert(2022 - pranoyObject.birthYear);
    console.log(2022 - pranoyObject.birthYear);
} else if (pranoyObject[interestedIn]) {
    alert(pranoyObject[interestedIn]);
    console.log(pranoyObject[interestedIn]);
} else {
    alert("Wrong Request!");
} */
/* Javascript Object Methods*/
/* ---------------------------------------------------- */
const pranoyObject1 = {
    firstName: "Pranoy",
    lastName: "Chakraborty",
    birthYear: 1998,
    job: "Software Developer",
    friends: ["Natasha", "Steve", "Peter", "Tony"],
    location: "India",
    twitter: "@ig_pranoy",
    hasDrivingLicense: true,
    calAge: function() {
        console.log(this);
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is ${this.age} years old ${this.job} and he ${
      this.hasDrivingLicense
        ? "has a driving license."
        : "does not have a driving license."
    } `;
    },
};
console.log(pranoyObject1.calAge());
console.log(pranoyObject1);
console.log(pranoyObject1.getSummary());

/* Javascript loops*/
/* ---------------------------------------------------- */

const years = [1998, 1997, 1991, 2001, 1982];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);