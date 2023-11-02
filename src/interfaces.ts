//allows us to enforce a certain structure of a class or object

interface isPerson{
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number
}
//what the above meand that if we have a veriable in future that is of type isPersion, it must
//have the above structure

const me:isPerson = {
    name:"shawn",
    age:30,
    speak(text: string):void{
        console.log(text);
        
    },
    spend(amount:number):number{
        console.log("i spent",amount);
        return amount
    }
}

let someone:isPerson;

//we can create a function that only accept arguements of a particular type

function greetPerson(person:isPerson){
    console.log("hello",person.name);
    
}

//the below function will only allow a value of type IsPerson
greetPerson(me)