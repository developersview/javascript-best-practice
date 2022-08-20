'use strict';

function calcAge(birthYear) {
    const age = 2022 - birthYear;
    console.log(firstName);

    let output = () =>
        `${firstName}, You are ${age} years old, born in ${birthYear}`;
    console.log(output());
    return age;
}

const firstName = 'Pranoy';
calcAge(1998);

const Pranoy = {
    firstName: 'Pranoy',
    year: 1998,
    calcAge: function() {
        const age = 2022 - this.year;
        console.log(this);
        return age;
    },
};
const Jonas = {
    firstName: 'Jonas',
    year: 1997,
    calcAge: function() {
        const age = 2022 - this.year;
        console.log(this);
        return age;
    },
};
console.log(Pranoy.calcAge());
console.log(Jonas.calcAge());