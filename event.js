const allButtons = document.querySelectorAll(".my-buttons button");
// console.log(allButtons.length);

allButtons.forEach(butt => {
    butt.addEventListener("click",(e)=>{
        e.target.style.backgroundColor = "yellow";
        e.target.style.color = "#333";
    })
})