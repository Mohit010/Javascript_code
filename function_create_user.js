function createuser(name,age,number){
    const user = {}
    user.name = name
    user.age = age
    user.number = number
    user.about = function(){
        return `My name is ${this.name} , and age is ${this.age}`
    }
    user.is18 = function(){
        return this.age >= 18
    }
    return user
}

const person = createuser("Vinay",98,203058)
console.log(person)
const is18 = person.is18()
console.log(is18)
const ab = person.about()
console.log(ab)