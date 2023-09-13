const user = [
    {
        userid : 1,
        age : 21
    },
    {
        userid : 2,
        age : 22
    },
    {
        userid : 3,
        age : 23
    }
]

const ans = user.find( (a) => {
     return a.userid === 2
})

console.log(ans)