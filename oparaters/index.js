
// tasks:
// ------
// 1. Problem 1 - Personalized Greeting:
//    - Problem: Write a program that prompts the user for their name and then displays a personalized greeting using alert.
//    - Example Output: If the user enters "Alice", the program should display "Hello, Alice! Welcome to our website."

// 2. Problem 2 - Calculator:-- 
//    - Problem: Create a basic calculator that prompts the user for two numbers and an operator (+, -, *, /). Perform the corresponding operation and display the result using alert.
//    - Example Output: If the user enters 5, *, and 3, the program should display "5 * 3 = 15."

// 3. Problem 3 - Age Verification:
//    - Problem: Write a program that prompts the user for their age. If the user is 18 or older, display an alert message saying "You are eligible to vote." Otherwise, display a message saying "You are too young to vote."
//    - Example Output: If the user enters 22, the program should display "You are eligible to vote."

// 4. Problem 4 - Temperature Converter:
//    - Problem: Write a program that prompts the user for a temperature in Celsius and converts it to Fahrenheit using the formula F = (C × 9/5) + 32. Display the converted temperature using alert.
//    - Example Output: If the user enters 30, the program should display "30°C is equal to 86°F."

// 5. Problem 5 - Odd or Even:
//    - Problem: Write a program that prompts the user for a number and determines if it's odd or even. Display the result using alert.
//    - Example Output: If the user enters 7, the program should display "7 is an odd number."

// 6. Problem 6 - Password Checker:
//    - Problem: Create a password checker that prompts the user for a password. If the password is "12345", display an alert message saying "Access granted." Otherwise, display a message saying "Access denied."
//    - Example Output: If the user enters "12345", the program should display "Access granted."


var name=prompt("Enter Your Full_Name");
alert("Hello ! "+ name +" Redcarpet to our website")

var n1=+prompt("enter then value for addition (+)");
var n2=+prompt("enter then value for addition (+)");
var sum=n1+n2;
// console.log(sum)
alert("Sum Of N1+N2 is : "+sum)




var n1=+prompt("enter then value for subraction (-)");
var n2=+prompt("enter then value for subraction (-)");
var sub=n1-(-n2);
console.log(sub)
alert("Sum Of N1-N2 is : "+sub)

var n1=+prompt("enter then value for multiplication (*)");
var n2=+prompt("enter then value for multiplication (*)");
var mul=n1*n2;
console.log(mul)
alert("Sum Of N1*N2 is : "+mul)

var n1=+prompt("enter then value for division (/)");
var n2=+prompt("enter then value for division (/)");
var div=n1/n2;
console.log(div)
alert("Sum Of N1/N2 is : "+div)

var age=+prompt("Enter the age:")

age>=18 ? alert("your are elegible for marriage"):alert("Your are not elegible for marriage");


var deg=+prompt("Enter the temparature");

var f=(deg * 9/5) +32;
// console.log(f)
alert( f+"°F is equal to "+deg+"°C.")

var num=+prompt("Enter the Any Number to find ODD or Even number");

num%2==0 ? alert("enter value is EVEN Number"):alert("Enter number is ODD Number")

var password="EEvil";

var pas=prompt("Enter the password to acces the website");

password===pas ? alert("Access granted  Wlecome sir !"):alert("Acces Denied , Sorry sir! your password is wrong ,check again ")