




// todays discussed topics:
// -------------------------
// 1.revision on loops,functions,conditional statements
// 2.string,.length,indexing of string
// 3.clone a string using forloop.

// tasks:
// ------
// 1.try to print the patterns using function.
// 2.reverse a string using function
// 3.check string is palindrome or not using function
// 4.find length of the string without using .length method

let con="";

for(let i=0;i<=6;i++){

    con+="*";
    console.log(con)
    // console.log("\n")
}



for(let j=0;j<=6;j++){
    let r="";

    for(let i=0;i<=j;i++)
    {
        r+="*"
    }

    console.log(r)
}


// let box="";

for(let i=5-1;i>=0;i--){
 let box=""
   for(let j=i;j>=0;j--){
    box+="*"
    // console.log()
   }
   
    console.log(box)
}


let nam="Ganapathi";
let rev=""

for(let i=nam.length-1;i>=0;i--){
     
    rev+=nam[i];

    // console.log(nam[i])

}
console.log(rev)



let gana="Bakthula Ganapathi";
let c=0;

for(let i=0;i<gana.length;i++){
c++;

}
console.log("length of String is : "+c)


let str="naman";

let str1=""

for(let i=str.length-1;i>=0;i--){
    // console.log(str[i])

    str1+=str[i];
 
}



console.log(str1)

if(str==str1){

    console.log(" is palindrome")
}else {
    console.log("is not a palindrome")
}