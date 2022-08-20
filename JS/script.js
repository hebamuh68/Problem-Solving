// strongly typed language
// int x = 10;
// x="ryhab";

// loosely typed language
var x = 10; //declare datatype by the value
x = "ryhab";
x = true;
// typeof ==> opertor declare datatype to any var
if (typeof x == "number") {
  console.log(true);
} else {
  console.log(false);
}
console.log(x, typeof x);
// null ==> not found
// undefined ==> declare but has no value

// js is synchoronous ==> single thread
// case sensitive
var a = 10;
var a = 20;
var A = 30;
console.log(a, A);
// literal
var x = 10;
console.log(x, typeof x);
// function expression
// x.sayHello = (function () {
//   alert("hello");
// })();
// x.sayHello();

// ctor
var y = new Number(10);
console.log(y, typeof y);
// y.sayHello = function () {
//   alert("hiiii");
// };
// y.sayHello();
// number methods
// var num = 6.5789087678;
// console.log(num.toFixed(3));
// console.log(num.toPrecision(2));
// console.log(Number.isInteger(num)); //true or false
// console.log(Number.isNaN(num)); //with num will false
// console.log(Number.isFinite(num)); //with num return true

// date ==> search
var t = new Date();
console.log(t.toLocaleDateString("ar-eg"));

// var prompt = parseInt(prompt("enter your age"));
// var prompt = Number(prompt("enter your age"));
// console.log(prompt, typeof prompt, prompt + 20);

// var num1 = prompt("enter num 1");
// var num2 = prompt("enter  num 2");
// console.log(num1 + num2);
// convert string to number
// 1-parseInt ,parseFloat xxxxxx
//   a-trimmint string ==> ignore spaces from start and end var x ="    123   " ==> var x ="123"
//   b-if(x.length === 0 ) ==> return NaN
//     else if (x.length > 0) ==> check first chars ==> digits ==> return digits
// ==>letters ==> return NaN

// 2- Number() , +
// a-trimming string ==> ignore spaces
// b- if(x.length == 0) ==> return 0
// c-else if (x.length > 0) ==> check all the input ==> digits ==> digits
//                                                   ==> letters ==> NaN

// local and global ,block scope ==> es6
// {
//     // local variables
// }
// global
var nam = "ryhab";
function myName() {
  // local
  var age = 28;
  // any var declared without var keyword ==> global after the fun call
  color = "red";
  console.log(nam, age);
}
myName();
console.log(color);

// == equality check ,compare values ,convert datatypes
//  === strict equality ,value ,datatypes

// // literal string
// var str = "ryhab";
// console.log(str, typeof str);

// // ctor string
// var str2 = new String("ryhab");
// console.log(str2, typeof str2);

// string methods
var str = "ITI@Pluralsight smart";
console.log(str.length); //property
// substring(start,end) ==> end not included
console.log(str.substring(1, 6));
console.log(str.substring(6, 0)); //swap
// substr(start,length)
console.log(str.substr(1, 6));
console.log(str.charAt(5));
console.log(str.charAt(str.length - 1));
console.log(str.slice(2, 4));
console.log(str.slice(-5));
console.log(str.indexOf("t", 15));
console.log(str.replace(/t/gi, "R"));
console.log(str.split("l"));
// regular expression ==> literal,ctor
// var x = /t/gi

// method chainning
document.write(str.bold().fontcolor("red").italics());

// search
// date , stack and heap ,associative array
//bonus==> NaN not equal NaN==> IEEE
