// 1.number

console.log(22);
var weight = 23;

console.log(weight);

var price =33;
price=11;

console.log(price);
// 2.string
var name = "nahian" ;
console.log(name);

var homeAddress = '131 tutpara main road khulna';
console.log(homeAddress);
//number + string for addition case
var number1 = 20;
var number2 = "40";

var total = number1 + number2;

console.log(total);
console.log(typeof total);

var total1 = number2 + number1;
console.log(total1);

//float

var chocolate1 = 0.5;

console.log(chocolate1);
console.log(typeof chocolate1);

var chocolate2 = chocolate1 + 1;

console.log(chocolate2);
console.log(typeof chocolate2);

chocolate1 += 2;

console.log(chocolate1);

// boolean(true or false)

var isRich = true;
console.log(isRich);
console.log(typeof isRich);

var passed = false;
console.log(passed);
console.log(typeof passed);

// integer and float conversion

var number3 = 20.5;
var number4 = 22.3;

var number5 = number3 + number4;

var number6 = parseInt(number5);
console.log(number6);
console.log(typeof number6);

var case1 = "here after  42 the fraction is not showing";

console.log(case1);

var apple = parseFloat(22.5);
console.log(apple);

// special case and fixed number after decimal point

var first = 0.1;
var second = 0.2;
var total3 = first + second;

console.log(total3);
console.log(total3.toFixed(3));

// positive infinity and negative infinity

const number7 = 50/0;
console.log(number7);
console.log(typeof number7);

const number8 = -60/0;
console.log(number8);

// plus minus multiplication division and mod

var fridge = 45000;

fridge -= 1000;

console.log(fridge);

let washingMachine = 50000;

let total4 = washingMachine + 30000;

console.log(total4);

let total5 = washingMachine * 5;

console.log(total5)

let total6 = washingMachine/5;

console.log(total6)

let total7 = 3020%5;
let total8 = 'mudulas value = ' + total7;

console.log(total8);
// works without +
console.log(200 - '30');
console.log(300* "67");
console.log(600/ '200');

// undefined

var sojib;
console.log(sojib);

const a = isNaN(9);
console.log(a);

const b = isNaN('nahian');
console.log(b);