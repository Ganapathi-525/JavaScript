// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

var array ="ganapathi";

// console.log(is_array(array));

var array=[1,2,3,4,5];

console.log(array==="[Object Array]");


// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]
//  one type 1
let data=[1,2,3,4,3,4,5];
let x=Array.from(data);
console.log(x)

// second model ES6 introduced the spread operator (...)

let r=[1,2,4,56,8,9];

let d=[...r];

console.log(d);


