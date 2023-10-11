
// tasks:
// -------

// 1.Problem: Check Even or Odd
// 	Write a program that takes an integer as input and checks whether it's even or odd. If the number is even, return "Even"; if it's odd, return "Odd".
// 2.Problem: Leap Year Check
// 	Write a program that checks whether a given year is a leap year.  Return "leap year" if it's a leap year, otherwise "not a leap year".
// 3.Problem: Find the Largest Number
// 	Write a program that takes three different/same numbers as input and returns the largest number among them.
// 	if all three same it should returns all are equal.
// 	if input is negative then it should return negative input.
// 4.Problem: Time of the Day
// 	Write a program that takes the current hour (in 24-hour format) as input and returns a string indicating the time of the day: "Good Morning" if the hour is between 6 and 11, "Good Afternoon" if between 12 and 17, and "Good Evening" if between 18 and 23. For other hours, return "Good Night".

// 5.Problem:Currency Converter
// 	Write a program that converts an amount from one currency to another based on the current exchange rate. The input should take three parameters: the amount, the input currency code (e.g., USD for US Dollar), and the output currency code (e.g., EUR for Euro). Return the converted amount.

// 6.Problem:Traffic Light:
// 	Write a switch statement for a traffic light system. The variable trafficLightColor represents the current color of the traffic light. Depending on its value ('red', 'yellow', 'green'), print a message indicating whether to "Stop", "Slow down", or "Go".

// 7.Problem:Seasons:
// 	Create a switch statement that takes a month as input and prints the corresponding season ("Spring", "Summer", "Autumn", or "Winter"). Assume January, February, and December are winter months, March, April, and May are spring months, and so on.

// 8.Problem:Menu Selection:
// 	Imagine a menu with options 1, 2, 3, and 4. Write a switch statement that takes a user's choice as input and performs a different action for each choice. For example, if the choice is 1, print "Option 1 selected", and so on for the other choices.


// var num=+prompt("Enter the Number");

// if(num%2==1){
//     // alert(num+" is Odd Number")
// }else{
//     // alert(num+" is a Even number")
// }


var a=34;
var b=-2;
var c=34;

if(a<=0 || b<=0 || c<=0){
    console.log("negative Input")
}else{



if(a>b && a>c){
    console.log(a," is bigger than c and b");
}else if(b>a && b>c){
    console.log(b," is bigger than a and c");
}else if(c>b && c>a){
    console.log(c," is bigger than a and b");
}else if(a==b&&b==c&&c==a){
    console.log("All are equal");
}

}


let time=12;

if(time>=6 && time<=11){
    console.log("Good morning!")
}else if(time>=12 && time<=17){
    console.log("Good afternoon!")

}else if(time>=18&&time>=23){
    console.log("Good Evening!");
}else{
    console.log("Good Night")
}


let light="";

switch(light){

    case "red":console.log("stop");
    break;
    case "Yellow":console.log("Slow Down");
    break;
    case "Green":console.log("Go");
    break;
    default:console.log("Run")
}

let month=1;

switch(month){
    case (month>=3&&month<=4):console.log("Spring");
    break;
    case (month>=5&&month<=6):console.log("Summer");
    break;
    case (month>=7&&month<=8):console.log("Mansoon");
    break;
    case (month>=9&&month<=10):console.log("Autumn");
    break;
    case (month>=11&&month<=12&&month>=1&&month<=2):console.log("Winter");


}