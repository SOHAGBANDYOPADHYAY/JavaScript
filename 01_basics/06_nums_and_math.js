const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());        //always gives value between 0 and 1

console.log((Math.random()*10) + 1);   
console.log(Math.floor(Math.random()*10) + 1);   // Math.floor will give minimum value. so, when we want atleast bigger than 1 and between 1to 9 then only we add 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //here we have to define max and min number. That's why we this function. 
                                                               //Here we get atleast minimum value what we have define.