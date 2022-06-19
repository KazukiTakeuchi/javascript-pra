'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');



// Functions
function test() {
    console.log('test function')
}

test();
test();

function fruitProcessor(apples = 1, oranges = 1) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(5, 0))
console.log(fruitProcessor(2, 4))
console.log(fruitProcessor(2));
console.log(fruitProcessor());

const num = Number('23');


// Function declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}
const age1 = calcAge1(1998);
console.log(age1);

// function calcAge2(birthYear) {
//     return 2022 - birthYear;
// }
const birthYear = 1998
// console.log(calcAge2(birthYear));

const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

// Arrow functions(parameterが少ない時はこちらの方が読みやすい)
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `your age is ${age}. ${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1998, 'Kazuki'));


// Functions Calling Other Functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    return `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
}

console.log(fruitProcessor(2, 3));



// Reviewing Functions
const calcAge = function (birthYear) {
    return 2022 - birthYear
}

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`your age is ${age}. ${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1950, 'Mike'));

// coding test
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

GOOD LUCK 😀
*/
const calcAverage = (first, second, third) => (first + second + third) / 3;

const scoreDolphinsAverage = calcAverage(44, 23, 71);
const scoreKoalasAverage = calcAverage(65, 54, 49);
console.log(scoreDolphinsAverage, scoreKoalasAverage);

const checkWinner = function (scoreDolphinsAverage, scoreKoalasAverage) {
    if (scoreDolphinsAverage >= 2 * scoreKoalasAverage) {
        console.log(`Dolphins win (${scoreDolphinsAverage} vs ${scoreKoalasAverage})`);
    } else if (scoreKoalasAverage >= 2 * scoreDolphinsAverage) {
        console.log(`Koalas win (${scoreKoalasAverage} vs ${scoreDolphinsAverage})`);
    } else {
        console.log(`no team wins`);
    }
}

checkWinner(scoreDolphinsAverage, scoreKoalasAverage);



// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice'] not change cuz friends is declared "const"

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

const calcAge4 = function (birthYeah) {
    return 2022 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age10 = calcAge4(years[0]);
const age20 = calcAge4(years[1]);
const age30 = calcAge4(years[years.length - 1]);
console.log(age10, age20, age30);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



// Basic Array Operations (Methods)
const best_friends = ['Michael', 'Steven', 'Peter'];

const new_length = best_friends.push('Jay');
console.log(best_friends);
console.log(new_length);

best_friends.unshift('John');
console.log(best_friends);

best_friends.pop();
console.log(best_friends);

best_friends.shift();
console.log(best_friends);

console.log(best_friends.indexOf('Michael'))
console.log(best_friends.indexOf('Steven'));
console.log(best_friends.indexOf('Kazuki'));  // not exist value => -1

best_friends.push(23);
console.log(best_friends.includes('Steven'))
console.log(best_friends.includes('Bob'));
console.log(best_friends.includes(23));




// Coding test

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
const calcTip = function (bill) {
    return bill >= 50 && bill <= 500 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);




// Dot vs. Bracket Notation
const jonas_info = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas_info);

console.log(jonas_info.lastName);
console.log(jonas_info['lastName']);

const nameKey = 'Name';
console.log(jonas_info['first' + nameKey]);
console.log(jonas_info['last' + nameKey]);


jonas_info.location = 'Portugal';
jonas_info['twitter'] = '@jonasschmedtman';
console.log(jonas_info);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas_info.firstName} has ${jonas_info.friends.length} friends, and his best friend is called Michael`);





const jon = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return this.hasDriversLicense ? `${this.firstName} is a ${this.calcAge()} and he has a driver license` : `${this.firstName} is a ${this.calcAge()} and he don't have a driver license`;
    }
};

console.log(jon.calcAge());
console.log(jon.age);
console.log(jon.getSummary())




const jo = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];


for (let i = 0; i < jonas.length; i++) {
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Filling types array
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}

console.log(types);

const years_recent = [1991, 2007, 1969, 2020];
const ages_recent = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}


const jonass = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonass.length - 1; i >= 0; i--) {
    console.log(i, jonass[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}



// The while Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
