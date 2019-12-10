/* eslint-disable no-extend-native */
var _this = undefined;
/* Add a new property to Number that is the Golden Ratio */
var phi = (1 + Math.sqrt(5)) / 2;
Number.phi = phi;
module.exports.phi = phi;
// Challenge 2
Number.prototype.round = function () {
    return Math.round(this);
};
Number.prototype.floor = function () {
    return Math.floor(this);
};
Number.prototype.ceil = function () {
    return Math.ceil(this);
};
// Challenge 3 pad(x, y) - pads Number with x 0s before, and y 0s after.
// Example: 34.801.pad(4,4) -> 0034.8010
// or Example: pad(34.801, 4,4) -> 0034.8010
// const pad = (str, length) =>
//   str.padStart((str.length + length), 0) +
//   str.padEnd(str.length + length, 0)
// console.log(pad(String(34.801), 4,4))
var pad = function (num, before, after) {
    if (before === void 0) { before = 0; }
    if (after === void 0) { after = 0; }
    var l = String(num).split('.');
    if (l.length === 1) {
        l.push('0');
    }
    l[0] = l[0].length < before ? '0'.repeat((before - l[0].length)) + l[0] : l[0];
    l[1] = l[1].length < after ? l[1] + '0'.repeat((after - l[1].length)) : l[1];
    return l.join('.');
};
module.exports.pad = pad;
var degToRad = function (deg) {
    try {
        if (typeof deg === 'number' || deg === ' ') {
            return deg * (Math.PI / 180);
        }
        return deg + " is not a number";
    }
    catch (err) {
        console.error(err);
    }
};
/* Example:
console.log(degToRad(56)) */
module.exports.degToRad = degToRad;
/* Stretch Goal: Check for invalid input.
If the value input is not a number or is not included the function should throw an error.
*/
var radToDeg = function (rad) {
    try {
        if (typeof rad === 'number' || rad === ' ') {
            return (rad * 180) / Math.PI;
        }
        return rad + " is not a number";
    }
    catch (err) {
        console.error(err);
    }
};
/* Example:
console.log(radToDeg(89)) */
module.exports.radToDeg = radToDeg;
/*  Challenge 6 toDollars(amount) - Formatting money is a common task for software projects.
A function could save you time in the future.
The goal of this function is to take a numeric value
and return a string beginning with a '$' and rounded to two decimal places.
*/
// Example: toDollars(3.9) -> $3.909 (Note: pads with a 0)
// Stretch Goals: Create a currency formatting function
// that simplifies the use of: Intl.NumberFormat
// intFormat(amount, countryCode, style)
var toDollars = function (amount) {
    var numberFormat = amount.toFixed(2);
    return "$" + numberFormat;
};
/* Example:
console.log(toDollars(83.9)) */
module.exports.toDollars = toDollars;
// tax(rate) - returns the amount with tax
var tax = function (price) {
    var rate = 8.5;
    var totalPrice = (price * rate) / 100 + price;
    return totalPrice;
};
/* Example
console.log(tax(400)); */
module.exports.tax = tax;
// calculates the interest over time.
var calculateInterest = function (total, years, ratePercent, roundToPlaces) {
    var interestRate = ((ratePercent / 100) + 1);
    return (total * Math.pow(interestRate, years(interestRate, years))).toFixed(roundToPlaces);
};
/* Example:
console.log(calculateInterest(995, 13, 2, 2)); */
module.exports.calculateInterest = calculateInterest;
// Challenge 9 mortgage(principal, numberOfPayments, interestRate).
function getMortgagePayment(startingLoanAmount, totalPayments, interestRate) {
    var interestRatePerMonth = interestRate / 12;
    return startingLoanAmount * interestRatePerMonth * (Math.pow((1 + interestRatePerMonth), totalPayments)) / Math.pow((1 + interestRatePerMonth), totalPayments) - 1;
}
/* Example
console.log(getMortgagePayment(100000, 60, 20)) */
module.exports.getMortgagePayment = getMortgagePayment;
// Challenge 10 intToHex(int) -> #332211
Number.prototype.hexString = function () { return _this.toString(16); };
// random(n) - returns an integer from 0 to n - 1
Number.prototype.random = function () { return Math.random(_this); };
function getRandomArbitrary(max) {
    return Math.round(Math.random() * (max - 1));
}
/* Example:
console.log( getRandomArbitrary(2)) */
module.exports.getRandomArbitrary = getRandomArbitrary;
// randomRange(min, max) - returns an integer between min and max
var randomIntegerInRange = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
/* Example:
console.log(randomIntegerInRange(0, 75)); */
module.exports.randomIntegerInRange = randomIntegerInRange;
// randomColor() - Returns a random hex color
var randomHexColor = function () { return "#" + Math.floor(Math.random() * 0xffffff).toString(16); };
/* Example:
console.log(randomHexColor()); */
module.exports.randomHexColor = randomHexColor;
