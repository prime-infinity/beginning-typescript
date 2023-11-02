class Invoice2 {
    readonly client:string; //can be read from inside and outside the class, but cannot be changed
    private details:string; //this cannot be accessed outside the class
    amount:number;

    constructor(c:string,d:string,a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne1 = new Invoice("mario","work for the mario website",230)
const invTwo2 = new Invoice("luigi","work for luigi website",200)

//we can allow only invoice types in this array
let invoices2:Invoice[]=[]
invoices.push(invOne1,invTwo2)

//inclasses, all properties are public by default
//we can modify it by using the "private" keyword, check line 3