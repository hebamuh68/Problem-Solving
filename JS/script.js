//1-Comparison operators, strict equality
function
myFunction ( a, b ) {
return a===b
}

//=======================================================
// 2-Get type of value
function myFunction(a) {
   return typeof a;
}

//=======================================================
// 3-Get nth character of string
function myFunction(a, n) {
   return a[n - 1];
}

//=======================================================
// 4-Remove last n characters of string
function myFunction(a) {
   return a.slice(0,(a.length-3));
}

//=======================================================
// 5-Check if a number is a whole number
function myFunction(a) {
    return a % 1 === 0;
}

function myFunction(a) {
  return a - Math.floor(a) === 0
}
