let employee:{
    readonly id:number,
    name:string,
    retire:(data:Date) => void
} = {id:1,
    name:"osamede",
    retire:(date:Date)=>{
        console.log(date);
        
    }
}