const arr = [1,2,3,4]

// const multiply = (num , idx) => {
//     console.log("idx is : " , idx);
//     console.log(num * 2)
// }

// for(let i=0;i<arr.length;i++){
//     multiply(arr[i],i)
// }

// arr.forEach(multiply)

// arr.forEach(function(num){
//     console.log(num * 2)
// })

const user = [
    {
        name : "Mohit",
        age : 21
    },
    {
        name : "Deepak",
        age : 22
    },
    {
        name : "Neeraj",
        age : 23
    }
    
]

user.forEach(function(user){
    console.log(user.name)
})