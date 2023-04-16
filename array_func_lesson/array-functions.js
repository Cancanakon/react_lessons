const users = [
    {name:"Mehmet", age:20}, 
    {name:"Akif" , age:7}, 
    {name:"Esat", age:19}];

/*
 push
 map
 find
 filter
 some
 every
 includes
*/

//push
/*
users.push('Selin');
users.push('Ramazan');
console.log(users);
*/


//map
/*users.map((item)=>{
    console.log(item);
});*/


//find
/*const result = users.find((item)=>(item.name)== 'Mehmet');
console.log(result); */

//filter
/*const filtered = users.filter((item)=> item.name == 'Mehmet' && item.age<25);
console.log(filtered);*/

//some
/*const some = users.some((item)=> item.age==11);
console.log(some);*/

//every
/*const every = users.every((item) =>item.age>7);
console.log(every);*/

//includes
/*const fruits = ['elma','muz','erik'];
const isInclude = fruits.includes("erik");
console.log(isInclude);*/