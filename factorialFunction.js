function  Factorial(number){
    let result=1;
    for(let i =1; i<=number; i++){
        result= result*i
    }
    return result;
}
const malti = Factorial(7);
console.log(malti);