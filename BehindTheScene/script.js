'use strict';

function calcAge(birthYear) {
    const age = 2022 - birthYear;
    console.log(firstName1);

    let output = () =>
        `${firstName1}, You are ${age} years old, born in ${birthYear}`;
    console.log(output());
    return age;
}

const firstName1 = 'Pranoy';
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

let firstName = 'Noah';

const Martha = {
    firstName: 'Martha',
    year: 1999,
    calcAge: function() {
        console.log(this);
        const age = 2022 - this.year;
        const self = this;
        const isMillenial = function() {
            if (self.year >= 1985 && self.year <= 2000) {
                console.log('You are an Millenial!');
            }
        };
        isMillenial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};

Martha.greet();
Martha.calcAge();

// arguments keyword
const addExpr = function(a, b) {
    console.log(arguments);
    return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 6, 10, 12);

const addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
};

addArrow();