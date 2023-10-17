



// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:


let stud = {

    Name: "Chandu",
    class: "degree",
    grade: "A+",
    section: "B",
    roll_no: "17",
    age: "23",


}


// there are two ways to acces the value from object
// 1.acessing the elemets from the using Dot Notation (.)
console.log(stud.roll_no)

// 1.acessing the elemets from the using Bracket Notation ([]);
console.log(stud["Name"])

console.log(`age of ${stud.Name} is ${stud.age}`);


// 2. Write a JavaScript program to delete the rollno property from the following object.Also print the object before or after deleting the property.

let stud1 = {

    Name: "Chandu",
    class: "degree",
    grade: "A+",
    section: "B",
    roll_no: "17",
    age: "23",


}

delete stud1.roll_no;
console.log(stud1)

//Write a JavaScript program to get the length of a JavaScript object.


let bike={
    type:"Sports",
    Name:"BMW S1000R",
    colour:"white and Blue",


};

let l=0;
for(let keys in bike){
    // console.log(keys)
    l++;

}

console.log(`length  of the object is ${l}`)


// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];


    for(let i=0;i<library.length;i++){

        console.log(`The Book name is ${library[i].title} and author is ${library[i].author} readingstatus Is ${library[i].readingStatus}`)
    }


//     Write a JavaScript program to get the volume of a cylindrical with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

let volobj={
    volume:7,
    diameter:4,

    getvolume:function(){
            
        let radius=this.diameter/2
        let volumeOfcylinder=this.volume*Math.PI*radius*radius;
        return volumeOfcylinder

    }

}

console.log(`the volume of cylinder is: ${volobj.getvolume().toFixed(4)}`)