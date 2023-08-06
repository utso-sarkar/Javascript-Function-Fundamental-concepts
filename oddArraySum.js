function oddArraySum(number){
    for(let i=0;  i<number.length;i++){
        const index = i;
        const element=number[index];
        if(element%2 ===0){
            console.log(index,element);
        }
        
    }
}
const myNumbers=[10,20,20,45,78,56,8,98];
oddArraySum(myNumbers);