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

//=======================================================
// WEAK 3
//=======================================================
// 6- Get nth element of array

function myFunction(a, n) {
   
   return a[n-1];
}

//=======================================================
// 7- Remove first n elements of an array
function myFunction(a) {
   
   return a.slice(3,(a.length));
   
}

function myFunction(a) {
   return a.slice(3);
}

//=======================================================
// 8- Return last n array elements
function myFunction(a, n) {
   
   return a.slice(-n)
}

//=======================================================
// 9- Remove a specific array element
function myFunction(a, b) {
   
   for (var i = 0; i <= a.length; i++ ) {
   if (a[i] === b){
   a.splice(a.indexOf(b), 1); }
   }
   
   return a;
}

function myFunction( a, b ) {
  return a.filter(cur => cur !== b)
}

//=======================================================
// 10- Sort an array of strings alphabetically
