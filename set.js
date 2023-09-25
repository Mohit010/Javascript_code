// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// setTimeout(()=>{
//     heading1.textContent = "hello world";
//     heading1.style.color = "red";
//     setTimeout(()=>{
//         heading2.textContent = "world hello 2";
//         heading2.style.color = "green";
//     },2000)
// },1000)

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");

function changeText(element , text , color , time){
    return new Promise((a,b) => {
        setTimeout(() =>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                a("done");
            }else{
                b("not done");
            }
        },time)
    })
}
changeText(heading1 , "one" , "red" , 1000)
.then((variable) => {
    return changeText(heading2 , "two" , "green" , 1000)
})
.then((variable2) => {
    return changeText(heading3 , "three" , "blue" , 1000)
})
.then((variable3) =>{
    return changeText(heading4 , "four" , "purple" , 1000)
})
.catch((error) =>{
    alert(error);
})