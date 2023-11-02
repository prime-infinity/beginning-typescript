//using more than one type(duh)

function kgToLbs(weight:number|string):number{
    //narrowing, checking what exact type
    if(typeof weight === "number"){
        //number(the compiler knows)
        return weight*2.2
    }else{
        //string
        return parseInt(weight)*2.2
    }
}

kgToLbs(10)
kgToLbs("10")