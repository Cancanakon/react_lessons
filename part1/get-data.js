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

const getId = (getIdNum) =>{
Promise.all([getUsers(getIdNum),getPost(getIdNum)])
.then(console.log)
.catch(console.log)
}
export default getId;