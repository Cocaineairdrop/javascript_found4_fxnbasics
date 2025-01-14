/*1. Write a function called add7 that takes one number and returns
    that number + 7.
*/

function add7(x) {
    return x + 7;
}
console.log(add7(3));

/*2. Write a function called multiply that takes 2 numbers and 
    returns their product.
*/

function multiply(a,b) {
    return a * b;
}
console.log(multiply(2,3));

/*3. Write a function called capitalize that takes a string and 
    returns that string with only the first letter capitalized. 
    Make sure that it can take strings that are lowercase, 
    UPPERCASE or BoTh.
*/

function capitalize(string) {
    const capitalized = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalized;
}
console.log(capitalize("Jarren is cute"));

/*4. Write a function called lastLetter that takes a string 
    and returns the very last letter of that string:
  - lastLetter("abcd") should return "d" 
*/

function lastLetter(string) {
    return string.slice(-1);
}
console.log(lastLetter("Jarren is cute"));