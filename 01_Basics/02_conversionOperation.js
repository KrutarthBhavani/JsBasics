
/* Number Conversion */
let score = 33;

console.log(typeof(score)); // number

let score2 = "33";
console.log(typeof(score2)); // string

let valueInNumber = Number(score2);
console.log(typeof(score2)); // string
console.log(typeof(valueInNumber)); // number


let score3 = "33abc"
let valueInNumber2 = Number(score3);
console.log(typeof(score3)); // string
console.log(typeof(valueInNumber2)); // number
console.log(valueInNumber2); // NaN

let score4 = null;
console.log(score4) // null
let valueInNumber3 = Number(score4);
console.log(valueInNumber3); // 0
console.log(typeof score4); // object

let score5 = undefined;
console.log(score5) // undefined
let valueInNumber4 = Number(score5);
console.log(valueInNumber4); // NaN
console.log(typeof score5); // undefined

let score6 = true;
console.log(score6) // true
let valueInNumber5 = Number(score6);
console.log(valueInNumber5); // 1
console.log(typeof score6); // boolean


// to Number Conversion
// "33" ==> 33
// "33abc" ==> NaN
// true ==> 1; false ==> 0;


// ------------------------------------------------------------------------------------------------- //

/* Boolean Conversion */
let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn); // true



let isLoggedIn2 = "";
let booleanisLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanisLoggedIn2); // false


let isLoggedIn3 = "krutarth";
let booleanisLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanisLoggedIn3); // true

// to Boolean Conversion
// 0 ==> false; 1==>true; any number(-5,-1022,13,5345 etc.)==> true
// "" ==> false
// "krutarth" ==> true