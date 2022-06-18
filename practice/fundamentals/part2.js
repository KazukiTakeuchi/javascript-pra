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

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2022 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `your age is ${age}. ${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1998, 'Kazuki'));
