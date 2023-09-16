// this function can only be called once...

function func(){
    let count = 0;
    return function(){
        if(count < 1){
            console.log("Hi, you called me");
            count++;
        }else{
            console.log("mai phle hee call ho chuka hu");
        }
    }
}
const myfunc = func();
myfunc();
myfunc();