///////////////////////////////////////
// Coding Challenge #5

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.
TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
GOOD LUCK 
*/
const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) return avgDolphins;
    else if (avgKoalas >= 2 * avgDolphins) return avgKoalas;
    else return -1;
};

let Dolphins = {
    score1: 85,
    score2: 54,
    score3: 41,
};
let Koalas = {
    score1: 23,
    score2: 34,
    score3: 27,
};

const avgDolphins = calcAverage(
    Dolphins.score1,
    Dolphins.score2,
    Dolphins.score3
);
const avgKoalas = calcAverage(Koalas.score1, Koalas.score2, Koalas.score3);

const winner = checkWinner(avgDolphins, avgKoalas);
if (winner === avgDolphins) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
} else if (winner === avgKoalas) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
} else {
    console.log(`No team wins..Its a draw!`);
}