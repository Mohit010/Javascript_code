const bucket = ["vegetable","salt","rice"];

const ans = new Promise((resolve,reject) => {
    if(bucket.includes("vegetable") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject("Not found");
    }
})

// ans.then((element) =>{
//     console.log("Let's eat" + " " +  element);
// },(error)=>{
//     console.log(error);
// })

ans.then((element) =>{
    console.log("Let's eat " + element);
}).catch((error) =>{
    console.log(error);
})