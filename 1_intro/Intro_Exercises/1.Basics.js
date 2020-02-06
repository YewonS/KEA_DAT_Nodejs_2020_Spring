console.log("hi");

var firstName = "Anders";
var lastName = "Latif";

console.log("My first name is", firstName, "and my last name is", lastName);
console.log(`My first name is ${firstName}`);

var year = "2017";
var number = 1;

var newYear = parseInt(year) + number;
var newYear1 = Number(year) + number;
var newYears = +(year) + number;
//+(year) => parses it to int

console.log(newYears);

var something = "123abc1";

console.log(parseInt(something));
// parseInt as far as you're able to..
console.log(Number(something));
// if it's not a number it's not a number