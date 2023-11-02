                            //<T extends object >
const addUID = <T extends {name:string}>(obj:T)=>{
    let uid = Math.floor(Math.random()*100)
    return {...obj,uid}
}

let docOne = addUID({name:"youshi",age:40})
let docTw0 = addUID("hello")


//with interface
interface Resource<T>{
    uid:number;
    resourceName:string;
    data:T; //whatever type that is present when created
}

const docThree: Resource<string> = {
    uid:1,
    resourceName:"person",
    data:"name"
}