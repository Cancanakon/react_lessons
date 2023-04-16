import axios from "axios";

const getUsers = (user_id) =>{
    return new Promise(async (resolve, reject)=>{
      const { data } = await axios("https://jsonplaceholder.typicode.com/users/"+user_id);

      resolve(data);
    });
};

const getPost = (post_id) =>{
    return new Promise(async (resolve, reject)=>{
      const { data } = await axios("https://jsonplaceholder.typicode.com/posts/"+post_id);

      resolve(data);
      reject("HATA!")
    });
}

/*(async () =>{
    const users = await getUsers(1);

    const post = await getPost(1);

    console.log(users);
    console.log(post);
    await getUsers(4).then((data)=> console.log("Finished!", data)).catch((e) => console.log(e));
   await getPost(4).then((data)=> console.log("Finished!", data)).catch((e) => console.log(e));
})(); */

//getPost(4).then((data)=> console.log("Finished!", data)).catch((e) => console.log(e));
//getUsers().then((data)=> console.log("Finished!", data)).catch((e) => console.log(e));

Promise.all([getUsers(1),getPost(1)])
.then(console.log)
.catch(console.log)