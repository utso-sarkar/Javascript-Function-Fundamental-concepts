// sum added to the array function

function getSumArray(numbers){
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        const index=i;
        const element=numbers[index];
        sum=sum+element;
        console.log(index,element,sum);

    }
    return sum;
}
const myNumbers=[10,20,20,45,78,56,8,98];
getSumArray(myNumbers);
