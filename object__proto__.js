const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = Object.create(obj1)
obj2.key3 = "value3"
console.log(obj2.key3)
console.log(obj2.__proto__)













const  usermethods = {
    about : function(){
        return `My name is ${this.name} , and age is ${this.age}`
    },
    is18 : function(){
        return this.age >= 18
    }
}

function createuser(name,age,number){
    const user = Object.create(usermethods)
    user.name = name
    user.age = age
    user.number = number
    return user
}

const person = createuser("Vinay",98,203058)
// console.log(person)
// const is18 = person.is18()
// console.log(is18)
// const ab = person.about()
// console.log(ab)

console.log(person)
console.log(person.about())











// const  usermethods = {
//     about : function(){
//         return `My name is ${this.name} , and age is ${this.age}`
//     },
//     is18 : function(){
//         return this.age >= 18
//     }
// }

function createuser(name,age,number){
    const user = Object.create(createuser.prototype)
    // const user = {
        
    // }
    user.name = name
    user.age = age
    user.number = number
    return user
}
createuser.prototype.about = function(){
        return `My name is ${this.name} , and age is ${this.age}`
    }
const person = createuser("Vinay",98,203058)
// console.log(person)
// const is18 = person.is18()
// console.log(is18)
// const ab = person.about()
// console.log(ab)

console.log(person)
// console.log(person.about())