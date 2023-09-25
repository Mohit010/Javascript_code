//then always return promise...
function f1(){
    return new Promise((a,b) =>{
        const bool = true;
        if(bool){
            a("yes");
        }else{
            b("no");
        }
    })
}

f1().then((ans) =>{
    console.log("The answer is " + ans);
}).catch((error) =>{
    console.log("The answer is " + error);
})