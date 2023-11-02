class Invoice {
    client:string;
    details:string;
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

const invOne = new Invoice("mario","work for the mario website",230)
const invTwo = new Invoice("luigi","work for luigi website",200)

//we can allow only invoice types in this array
let invoices:Invoice[]=[]
invoices.push(invOne,invTwo)