class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `eat ${this.name} and live a happy life`
    }
}

const a = new Animal("sheru",89);
console.log(a.age)
console.log(a.name)
console.log(a)
console.log(a.eat())

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }
    run(){
        return `${this.name} is running at a speed of ${this.speed} kmph`
    }
}
const tommy = new Dog("tom",4,555509)
console.log(tommy.name)
// console.log(e("wheat"))
console.log(tommy.run())
console.log(tommy.eat())
