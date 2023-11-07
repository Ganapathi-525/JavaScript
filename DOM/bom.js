

let data=JSON.parse(localStorage.getItem("seemore"));

console.log(data["title"])







let main1=document.getElementById("main1");




let kal=document.createElement("div");


    let img1=document.createElement("img");
    img1.setAttribute("src",data["image"]);

    img1.style.width="100px";

    let title12=document.createElement("h3");
    title12.innerText=data["title"];

    let pricee=document.createElement("h4");

    pricee.innerText=data["price"];

    let rate1=document.createElement("h5");

    rate1.innerText=data["rating"]["rate"];

    kal.append(img1,title12,pricee,rate1)


main1.append(kal)

// console.log("gaa")

// data.map((val)=>{

//     let kal=document.createElement("div");


//     let img1=document.createElement("img");
//     img1.setAttribute("src",val["image"]);

//     img1.style.width="100px";

//     let title12=document.createElement("h3");
//     title12.innerText=val["title"];

//     let pricee=document.createElement("h4");

//     pricee.innerText=val["price"];

//     let rate1=document.createElement("h5");

//     rate1.innerText=val["rating"]["rate"];



//     kal.append(img1,title12,pricee,rate1)
    
   
//     maindiv.append(kal)


// })

