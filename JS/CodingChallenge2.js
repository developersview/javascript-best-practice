/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
HINT: Use an if/else statement 😉
GOOD LUCK 😀
*/
let mass, height;
let BMI = (mass, height) => mass / height ** 2;
let Mark = {
    weight: 82,
    height: 1.46,
};
let John = {
    weight: 82,
    height: 1.46,
};
let MarkBMI = BMI(Mark.weight, Mark.height);
let JohnBMI = BMI(John.weight, John.height);
console.log('BMI index of Mark:' + Math.ceil(MarkBMI));
console.log('BMI index of John:' + Math.ceil(JohnBMI));

if (MarkBMI > JohnBMI) {
    console.log(
        `Mark's BMI is ${Math.ceil(MarkBMI)}, which is higher than JohnBMI`
    );
} else if (JohnBMI > MarkBMI) {
    console.log(
        `John's BMI is ${Math.ceil(JohnBMI)}, which is higher than MarkBMI`
    );
} else {
    console.log(
        `Both Marks and John's BMI is same, which is ${Math.ceil(JohnBMI)}`
    );
}