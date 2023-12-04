
// console.log("gana")

let forms=document.forms;

// console.log(forms[0])

// let pepoleDetails=[]


forms[0].addEventListener("submit",(e)=>{
e.preventDefault();
    // console.log("gana")
    // e.target[0].value=""
    // e.target[1].value=""
console.log(e.target[0])

    let obj={

        "name":e.target[0].value,
        "email":e.target[1].value,
        "password":e.target[2].value
        

    }
// pepoleDetails.push(obj)

// localStorage.setItem("peopledata",JSON.stringify(pepoleDetails))
    // console.log(obj);

    e.target[0].value=""
    e.target[1].value=""
    e.target[2].value=""

// window.onload

})
// pepoleDetails=JSON.parse(localStorage.getItem("peopledata"));
// console.log(pepoleDetails)


// console.log(forms[0].target)




