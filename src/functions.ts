
//void if will not return a value
//we can make a parameter optional by doing taxYear?:number
//we can also give an arguement a default value, like taxYear = 2022
function calculateTask(income:number,taxYear:number):number | string{
    //let x;
    if(income < 50_000 && taxYear < 4){
        return income * 1.2
    }
    return 0
}

calculateTask(3000,2023)