//using a type alias, we can define a custom type
type Employee = {
    readonly id:number,
    name:string,
    retire:(data:Date) => void
}

let employee2: Employee = {
    id:1,
    name:"osamede",
    retire:(date:Date)=>{
        console.log(date);
        
    }
}