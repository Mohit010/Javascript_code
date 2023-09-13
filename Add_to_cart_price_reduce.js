// const arr = [1,2,3,4,5]


// const ans = arr.reduce( (accumulator , currentvalue) => {
//     return accumulator + currentvalue;
// });

// console.log(ans)
const data = [
    {
        id : 1,
        name : "Watch",
        price : 4000
    },
    {
        id : 2,
        name : "Bottle",
        price : 3000
    },
    {
        id : 3,
        name : "Laptop",
        price : 5000
    }
]

const ans = data.reduce( (a,c) => {
    return a + c.price
},0)

const ans1 = data.map( (obj) =>{
    return obj.name
})

console.log(ans)
console.log(ans1)
console.log(ans1.toString())