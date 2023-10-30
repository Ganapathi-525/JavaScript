



function right(){

let con="";

for(let i=0;i<=2;i++){

    con+="*";
    console.log(con)
    // console.log("\n")
    // return con
    ;
    // con+="\n";
}
// return con
// console.log(2/2+2)
}
right()


for(let j=0;j<=3;j++){
    let r="";

    for(let i=0;i<=j;i++)
    {
        r+="*"
    }

    // console.log(r)
}


// let box="";
function left(){


for(let i=5-1;i>=0;i--){
 let box=""
   for(let j=i;j>=0;j--){
    box+="*"
    // console.log()
   }
   

    console.log(box)
}
}

left()

// revers a string
function revs(x){
// let nam="Ganapathi";
let rev=""

for(let i=x.length-1;i>=0;i--){
     
    rev+=x[i];

    // console.log(nam[i])

}
// console.log(rev)
return rev

}

console.log(revs("Chandu"))


// let gana="Bakthula Ganapathi";
function leng(f){
let c=0;

for(let i=0;f[i]!=undefined;i++){
c++;

}
 return "length of String is : "+c

}

console.log(leng("chandu"))



function palindrome(x){
// let str="naman";

let str1=""

for(let i=x.length-1;i>=0;i--){
    // console.log(str[i])

    str1+=x[i];
 
}



// console.log(str1)

if(x==str1){

    return `  ${x} is palindrome string`
}else {
    return ("is not a palindrome")
}
}

console.log (palindrome("madam"))