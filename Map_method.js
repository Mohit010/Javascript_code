
// const arr = [2,3,4,5,6]

// const square = (num) => {
//     return num * num
// }

// const ans = arr.map(square)
// console.log(ans)

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

const ans = user.map( (user) => {
    // return user.name
    return user.age
})
console.log(ans)
