// console.log("hello");

const text = document.querySelector(".text");
// const URL =" https://dog.ceo/api/breeds/image/random";
// const URL = "https://newsapi.org/v2/everything?q=tesla&from=2023-08-28&sortBy=publishedAt&apiKey=API_KEY";
const button = document.querySelector(".button");
const URL = "https://jsonplaceholder.typicode.com/users";


async function getApi(url){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
getApi(URL);
