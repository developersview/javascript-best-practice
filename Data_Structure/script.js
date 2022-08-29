'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    orderDelivery: function({
        time = '20.00',
        address,
        mainIndex = 0,
        starterIndex = 1,
    }) {
        if (address === undefined) {
            console.log('Please specify a delivery Address');
        } else {
            console.log(
                `Order Receieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
            );
        }
    },
    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicius pasta with ${ing1}, ${ing2}, ${ing3}`);
    },
};

//Destructuring of Array
const arr = [2, 3, 5];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(arr);
console.log(a);
console.log(b);
console.log(c);

const [x, y, z] = arr;
console.log(x, y, z);
let [main, , seccondary] = restaurant.categories;
console.log(main, seccondary);

//switching variables
/* let temp = main;
main = seccondary;
seccondary = temp;
console.log(main, seccondary); */
[main, seccondary] = [seccondary, main];
console.log(main, seccondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

const [i1, j1, [k, l]] = nested;
console.log(i1, j1, k, l);

//default value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//Destructuring of Objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
    name: ResturantName,
    openingHours: Hours,
    categories: Tags,
} = restaurant;
console.log(ResturantName, Hours, Tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
console.log(ResturantName, categories);

//Mutating Variables
let a1 = 111;
let b1 = 999;
const obj = { a1: 25, b1: 10, c: 56 };
({ a1, b1 } = obj);
console.log(a1, b1);

//Destructuring Nested Objects
const {
    fri: { open: o, close: cl },
} = restaurant.openingHours;
console.log(`Opening Hour is ${o} and Closing Hour is ${cl}`);

restaurant.orderDelivery({
    time: '22.30',
    address: '5th Block, Jayanagar, Bangalore',
    mainIndex: 2,
    starterIndex: 2,
});

//spread operator
const arr1 = [7, 8, 9, 10];
const newarr1 = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(newarr1);
const newarr2 = [1, 2, ...arr1];
console.log(newarr2);
console.log(...newarr2);
const newMenu = [...restaurant.mainMenu, 'Grilled Fish', 'Cheese Momo'];
console.log(newMenu);
console.log(...newMenu);

//copy array
const mainMenuArray = [...restaurant.mainMenu];

//join two arrays
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu1);

//Itetrables
const str = 'Pranoy';
const letters = [...str, ' ', 'C', 'H'];
console.log(letters);
console.log(...letters);

/* const ingredients = [
    prompt("Let's make pasta! Ingredient 1"),
    prompt("Let's make pasta! Ingredient 2"),
    prompt("Let's make pasta! Ingredient 3"),
];
console.log(...ingredients);
restaurant.orderPasta(...ingredients); */

//SPREAD , right side of the assignment operator =
const arr2 = [1, 2, ...[4, 5]];
console.log(arr2);

const [a2, b2, ...others] = [1, 2, 3, 4, 5];
console.log(a2, b2, others);