const user1 = {
    name : "Vinay",
    age : 98,
    about : function(){
        console.log(this.name , this.age)
    }
}
// user1.about.call(user1)
const user2 = {
    name : "Mohit",
    age : 98
}

user1.about.call(user2)








function about(hobby , music){
    console.log(this.name , this.age,hobby,music)
}

const user1 = {
    name : "Vinay",
    age : 98,
}
// user1.about.call(user1)
const user2 = {
    name : "Mohit",
    age : 98
}

// about.call(user2,"Dance","Nira ishq")
// about.apply(user2,["Dance","hello"])
const ans = about.bind(user2,"guitar","mashup")
ans()
