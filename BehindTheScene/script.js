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
    age: 24,
    calcBirthYear: function() {
        const birthYear = 2022 - this.age;
        return birthYear;
    },
};
console.log(Pranoy.calcBirthYear());