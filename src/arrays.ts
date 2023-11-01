let numbers:number[]  = [1,2,3/*,'4'*/]

let newNum:number[] = []

newNum[0] = 1
//the below will give an error
//newNum[1] = '2'

numbers.forEach((n)=>{
    n.toExponential
})