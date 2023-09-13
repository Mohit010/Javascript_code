// const arr = [200,400,11,34,900]

// // const ans1 = arr.sort();
// const ans = arr.sort((a,b) => {
//     return a - b
// })
// console.log(ans)
// // console.log(ans1)

const products = [
    {
        id : 1,
        name : "n1",
        price : 1000
    },
    {
        id : 2,
        name : "n2",
        price : 1500
    },
    {
        id : 3,
        name : "n3",
        price : 1200
    },
    {
        id : 4,
        name : "n4",
        price : 1150
    },
    {
        id : 5,
        name : "n5",
        price : 1750
    }
]

const lowToHigh = products.slice(0).sort((a,b) => {
    return a.price - b.price
})

console.log(products)
console.log(lowToHigh)































