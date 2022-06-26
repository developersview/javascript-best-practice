// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
GOOD LUCK 😀
*/
let mass, height;
let BMI = (mass, height) => (mass / (height ** 2));
let Mark = {
    weight: 78,
    height: 1.69
}
let John = {
    weight: 92,
    height: 1.95
}
let MarkBMI = BMI(Mark.weight, Mark.height);
let JohnBMI = BMI(John.weight, John.height);
console.log("BMI index of Mark:" + Math.ceil(MarkBMI));
console.log("BMI index of John:" + Math.ceil(JohnBMI));
let markHigherBMI = MarkBMI > JohnBMI;
console.log(markHigherBMI);