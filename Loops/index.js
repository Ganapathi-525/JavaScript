// 10/10/2023
// ------------
// discussed topics:
// 1.for loop
// 2.while loop
// 3. do-while loop

// tasks:
// ------
// document on loops
// diff b/w for loop, do-while and while loop.
// 1.Print even numbers from 1 to 20 using a for loop.
// 2.Print the multiplication table for 5 using a for loop.
// 3.Print odd numbers from 30 to 1 using a while loop.
// 4. Calculate the sum of numbers from 1 to 10 using a do-while loop.



for(let i=1;i<=20;i++){

    if(i%2==1){
        console.log(i," is a Odd Number")
    }else{
        console.log(i," is a Even Number")
    }
}




for(let i=1;i<=10;i++){
    console.log(5+"*"+i+"="+i*5)
}


let i=1
let sum=0;

do{
  
   sum=sum+i;
   i++;
} while(i<=10);

console.log("sum is ",sum)