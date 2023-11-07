// 1.Create a function that takes two numbers as arguments and returns their sum.
function sum(x, y) {
  return x + y;
}
// console.log(sum(2,3))

// 2.Write a function that takes an integer minutes and converts it to seconds.

function mintosec(s) {
  return s * 60;
}

//   console.log(mintosec(4))

// 3.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
function increments(w) {
  // w=w+1;
  return ++w;
}
// console.log(increments(10));

// 4. Create a function that takes the age in years and returns the age in days.
function agetodays(r) {
  return `my age in days ${r * 365.24}`;
}
//   console.log(agetodays(22))

// 5.Create a function that takes voltage and current and returns the calculated power.
function current(V, I) {
  return `power is P= ${V * I}`;
}

//   console.log(current(44,23))

//6.Write a function that returns the string "something" joined with a space " " and the given argument a.

// 7.Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function sum1(x,y){
    if(x===10 || y===10){
        return true
    }else if(x+y==10){
        return `sum is ${10}`
    }else{
        return x+y
    }
}

// console.log(sum1(5,4))
//
// 8.Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
   function tostring(a,b){

    if(a.length==b.length){

        return true
    }else{
        return false
    }
   }

  //  console.log(tostring("ganesh","Ganesh"));

// 9.Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
let name=(x)=>`Hi man ${x}`;

// console.log(name("ganesh"))

// 10.Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
function phone(array){
    
    let ph="(";
    let l=array.length;
    for(let i=0;i<=l-1;i++){
      if(i<=2){
        ph+=array[i]
      }
      else if(i==3){
        ph+=") "
      }
      else if(i>4 && i<6){
          ph+=array[i];
    }
    else if(i==6){

        ph+= array[i]+"-"
    }
    else if(i<=9){
        ph+=array[i]
    }
}
return ph;
}
let a1=[5,5,5,5,5,5,5,5,5,5]
// console.log(phone(a1))
// console.log(a1.length)

// Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:
// findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

// let aa=[12,3,4,545];
// let max=-Infinity
// for(let i=0;i<aa.length;i++){
//   if(aa[i]>max){
//     max=aa[i]
//   }

// }

function findLargestNums(x){
     let array1=[]
    for(let i=0;i<x.length;i++){
       let max=-Infinity
        for(let j=0;j<x[i].length;j++){
           
            if(x[i][j]>max){
                max=x[i][j];
            }

        }
        array1.push(max)

    }
  return array1
}
let largest=[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]

// console.log(findLargestNums(largest))

// Create a function that takes an array of numbers and returns the second largest number.
// Example:
// secondLargest([10, 40, 30, 20, 50]) ➞ 40

// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
// Example:

// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

// Example:

// findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3

let a2=[2, 2, 2, 3, 4, 4, 4];
function uniquenum(x){
for(let i=0;i<x.length;i++){
let c=0;
    for(let j=0;j<x.length;j++){
        if(x[i]==x[j]){
            c++;
        }

    }
    if(c==1){
        return x[i];
    }
}
}


// console.log(uniquenum(a2))
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.
// Example:

// charCount("c", "Chamber of secrets") ➞ 1

// Create a function that takes a string and returns the number (count) of vowels contained within it.
// Example:

// countVowels("Celebration") ➞ 5

// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// Example:
// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"

//   Take one integer n, loop till n and pass each value to a function, create a function that takes one integer parameter, and multiply with 2 in every integer.

// 			Input:      n=5
// 			Output:   2 4 6 8 10

// 			Explanation:  Loop start with 1 go till 5 bcoz n=5
// 					1 x 2 =2, 2 x 2=4, 3 x 2=6 …..etc

//  20. Create Function that will take one parameter and return type of the data.

// 			Input:       500
// 			Output:     Integer

// 			Input:       Coding
// 			Output:    String

//  21. Program to find greatest of three numbers(using ternery operator).

// 			Input:  4 8 2
// 			Output: 8 is gretest

//  22 . C Program to find factorial of number.

// 			Input: n=5
// 			Output: 120

// 			Explanation: 5 x 4 x 3 x 2 x 1 = 120

//  23. C Program to arrange numbers in ascending order
// 			Input: [2,3,1,5,4]
// 			Output: [1,2,3,4,5]

// 		        Sort the Array using loop only(you can not use predefined function).

//  24. Print Patter using loop.

// 			1
// 			1 2
// 			1 2 3
// 			1 2 3 4
//   			1 2 3 4 5

//  25. C Program to Calculate the Power of a Number(using loop only).

// 			Input: n=5, p=3
// 			Output: 5 ^ 3 = 125
// 			Explanation: 5 x 5 x 5 = 125

//  26. Program to Check Whether a Number is Prime or Not

// 			Input: 9
// 			Output: 9 is not a prime no

// 			Input: 7
// 			Output : 7 is a prime no

//  27. Program to find LCM of two numbers using while loop

// 			Input: 15 50
// 			Output: Lcm of 15 and 50 is 150.

//  28. Program to Display Characters from A to Z Using Loop with count.

// 			Output: A1 B2 C3 D4 E5 F6 ……. Z26

// 29. Program to find a missing number

// 			Input:  n=5(length of array), arr= [5,3,1,4]
// 			Output: 2 is missing

// 		Using loop only(you can not use predefined function)

// 30. Program to count vowels and consonants in a given String.

// 			Input: i am ram
// 			Output: 3 vowels 3 consonants.

// 31. program to insert  the elements of an array for specific index.

// 			Input: [1,2,3,4,5,7,8,9,10] , index=5
// 			Output: [1,2,3,4,5,6,78,9,10]

// 32. Reverse a number using while Loop

// 			Input: 123
// 			Output: 321

// 33. Count occurrence of number:

// 			Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
// 			Output: 7 present 2 times.


let values = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },

  {
    id: 2
    ,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  ]

  let arr=[{},2,3,4]
  
  console.log(values[0].id)