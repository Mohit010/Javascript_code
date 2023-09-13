class Person {
    constructor(firstname,lastname,age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get fullname(){
        return `${this.firstname} , ${this.lastname}`
    }
    set fullname(fullname){
        const [firstname , lastname] = fullname.split(" ")
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

const person1 = new Person("Mohit","Nagar",98);
console.log(person1)
// console.log(person1.fullname())
// console.log(person1.fullname)
// get changes the function into a property so that it can be used without()
person1.fullname = "deepak yadav"
console.log(person1)