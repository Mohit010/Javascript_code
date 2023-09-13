class Createuser {
    constructor(name,age,number){
        console.log("Constructor is called")
        this.name = name;
        this.age = age;
        this.number = number;
    }
    about(){
        return `Hi name is ${name} and age is ${age}.`
    }
    is18(){
        return this.age >= 18
    }
}

const user1 = new Createuser("Deepak",8,200304)
console.log(user1.age)
console.log(user1.is18())
console.log(user1.name)