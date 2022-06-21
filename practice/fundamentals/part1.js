// calculate BMI
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John`);
} else {
    console.log(`John's BMI is ${BMIJohn} higher than Marks`);
}



const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);


// switch statement
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory video');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
    case 'friday':
        console.log('Record videos');
        break;
    case 'satursday':
    case 'sunday':
        console.log('Enjoy the weekend :D')
        break;
    default:
        console.log('Not avalida day!');
}

// The Conditional (Ternary) Operator　三項演算子
const age = 23;
age >= 18 ? console.log(`I like to drink bear`) : console.log(`I can't dring bear`);

const drink = age >= 19 ? 'bear' : 'water';
console.log(drink);
