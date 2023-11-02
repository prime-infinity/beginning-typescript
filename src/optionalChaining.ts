type Customer={
    birthday:Date
}

function getCustomer(id:number):Customer|null{
    return id === 0? null : {birthday:new Date()}
}

let customer = getCustomer(0)
//optional property access
console.log(customer?.birthday)

//optional element access operator
//customers?.[0]
