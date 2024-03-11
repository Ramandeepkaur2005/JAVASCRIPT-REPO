const score = 700
console.log(score);

const balance = new Number(800);
console.log(balance);

console.log(balance.toString().length);
console.log(typeof(balance));
console.log(balance.toFixed(2));

const otherNum = 180.65;
console.log(otherNum.toPrecision(4));

const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-IN'));

//------------------MATHS---------------------------

console.log(Math);
console.log(Math.abs(-8));
console.log(Math.round(7.89));
console.log(Math.ceil(3.2));
console.log(Math.floor(6.9));
console.log(Math.min(7,8,9));
console.log(Math.max(7,8,9));

console.log(Math.random()); // value between 0 - 1
console.log((Math.random()*10)+1);

const min = 6;
const max = 12;
console.log(Math.round(Math.random() * (max - min + 1)) +min);