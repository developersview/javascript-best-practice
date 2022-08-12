// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
GOOD LUCK 😀
*/

const person1 = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.BMI = Math.ceil(this.mass / this.height ** 2);
        return this.BMI;
    },
};

const person2 = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.BMI = Math.ceil(this.mass / this.height ** 2);
        return this.BMI;
    },
};
person1.calcBMI();
person2.calcBMI();
console.log(person1.BMI, person2.BMI);

if (person1.BMI === person2.BMI) {
    console.log(`Both persons BMI is same`);
} else {
    person1.BMI > person2.BMI ?
        console.log(
            `${person1.fullName}'s BMI(${person1.BMI}) is higher than ${person2.fullName}'s BMI(${person2.BMI})`
        ) :
        console.log(
            `${person2.fullName}'s BMI(${person2.BMI}) is higher than ${person1.fullName}'s BMI(${person1.BMI})`
        );
}