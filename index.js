//DOM - Document object model
// console.dir(document)

// const mainHeading = document.getElementById("main-heading");
// const mainHeading = document.querySelector("#main-heading");
// const header = document.querySelector(".header");
// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);
// console.log(header);
// console.log(mainHeading);

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);
// mainHeading.textContent = "This is something else";
// console.log(mainHeading);

//array Like object means => indexing , length property...

// const mainHeading = document.querySelector("div");
// console.log(mainHeading);
// mainHeading.style.color = "red";

// const navItems = document.getElementsByTagName("a");
// for(let i=0;i<navItems.length;i++){
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green";
// }

const btn = document.querySelector(".btn-headline");
// function clickme(){
//     console.log("You clicked me...!!!!!!");
// }
// btn.addEventListener("click",clickme);
btn.addEventListener("click" , () => {
    console.log("arrow function");
})
const submit = document.querySelector("#sum");
submit.addEventListener("mouseover" , ()=>{
     submit.style.width = "1000px";
    // console.log(submit);
    // submit.style.color = "red";
})