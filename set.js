const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
setTimeout(()=>{
    heading1.textContent = "hello world";
    heading1.style.color = "red";
    setTimeout(()=>{
        heading2.textContent = "world hello 2";
        heading2.style.color = "green";
    },2000)
},1000)