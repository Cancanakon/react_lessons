//setTimeout(()=>{
  //  console.log("Test");
//},2000)

//setInterval(()=>{
  //  console.log("H3r saniye çalışırım.");
//},1000)

/*
const sayHi = (cb) =>{
    cb();
};

sayHi  (() =>{
    console.log("Hello");
}); */


import fetch from "node-fetch";
//fetchleri iç içe kullanarak eğer bağımlı değişken varsa bağlı olduğunu beklemesini sağlıyoruz! 
/*fetch("https://jsonplaceholder.typicode.com/users/1")
.then(data => data.json())
.then((users) =>{ console.log("Users downloaded! ",users);

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(data => data.json())
.then((posts) =>{
    console.log("Post downloaded!", posts);

fetch("https://jsonplaceholder.typicode.com/comments/1")
.then(data => data.json())
.then((comments)=>{
    console.log("Comments downloaded!",comments);
} )
})
});  
*/

async function getData() {
    const users = await (await fetch("https://jsonplaceholder.typicode.com/users/1")).json();
    console.log("Users ",users);

    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    console.log("Post ",post);

    const comments = await (await fetch("https://jsonplaceholder.typicode.com/comments/1")).json();
    console.log("Comments ",comments);


}
getData();