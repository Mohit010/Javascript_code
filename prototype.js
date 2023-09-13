// prototype is a kind of extraspace....
function createuser(name,age){
    this.name = name;
    this.age = age;
}
createuser.prototype.about = function(){
    console.log(this.name,this.age)
}
createuser.prototype.bool = function(){
    console.log(this.age >= 18)
}
const user1 = new createuser("Mohit",98);
// console.log(user1.name)
user1.about()
user1.bool()

// new keyword
// 1. create empty object this = {}
// 2. return {}