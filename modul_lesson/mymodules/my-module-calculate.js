 const hi = (name) => console.log("Merhaba "+ name);

 export const topla = (a,b) =>{
    return a+b;
}
export const cikar = function cikar(a,b) {
    return a-b;
}

export const carpma = (a,b) =>{ return a*b;}

export const bolme = (a,b)=>{
    if(a>=b && b!=0){
        return a/b;
    }else{
        console.log("Bu işlem gerçekleşemez!")
        return 0;
    }
}
export default hi;
