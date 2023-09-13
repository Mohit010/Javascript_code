
const info = () => {
    console.log(`Hi there my name is ${this.name} , age is ${this.age} and my number is ${this.number}`)
}


const person1 = {
    name : "Vinay",
    age : 98,
    number : 203058,
    about : info
}

const person2 = {
    name : "Gautam",
    age : 120,
    number : 234456,
    about : info
}

const person3 = {
    name : "Deepak",
    age : 200,
    number : 345560,
    about : info
}

const person4 = {
    name : "Mohit",
    age : 900,
    number : "203052",
    about : info
}
console.log(person1.about())



// "this" of Arrow function is one level up...

