// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// xhr.open("GET" , URL);

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         console.log(xhr.response);
//     }
// }

// xhr.send();

// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL);
// xhr.onload = () =>{
//     const data = JSON.parse(xhr.response);
//     console.log(data);
// }
// xhr.send();

// const URL = "https://jsonplaceholder.typicode.com/posts";

// function sendRequest(method , url){
//    return new Promise(function (resolve , reject){
//     const xhr = new XMLHttpRequest();
//     xhr.open(method,url);
//     xhr.onload = function(){
//         if(xhr.status >= 200 && xhr.status < 300){
//             resolve(xhr.response);
//         }else{
//             reject(new Error("Something went wrong"));
//         }
//     }
//     xhr.onerror = function(){
//         reject(new Error("Something went wrong"));
//     }
//     xhr.send();
//    })
// }

// // const p = sendRequest("GET" , URL);
// // console.log(p);

// sendRequest("GET", URL)
//    .then(response => {
//         console.log(response);
//     })


const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
 .then(response =>{
    console.log(response);
 })



















