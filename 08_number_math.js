const score = 1000;
console.log(score);

const balance = new Number(1122);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //used when build an e-commerce website

const num = 23.2153;
console.log(num.toPrecision(2));

const price = 10000000;
console.log(price.toLocaleString('en-IN'));



//  MATH

console.log(Math); // go to console and run it

console.log(Math.abs(-1)); //negative to positive
console.log(Math.round(4.6));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.random()); // value btw 0 to 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min + 1)) + min);  // to generate random number between max and min