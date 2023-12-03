"use strict";
// Exercise 4:   Write a program that checks if a given number is even or odd.
function checkOddEven(num) {
    if (num % 2 === 0) {
        return 'Even';
    }
    else {
        return 'Odd';
    }
}
// Test the function
let numberToCheck = 7;
let result = checkOddEven(numberToCheck);
console.log(`${numberToCheck} is an ${result} number`);
