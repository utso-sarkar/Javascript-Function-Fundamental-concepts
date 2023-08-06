function isleapYear(year){
    const remainder =year%4;
    if(remainder===0){
        return true;
    }
    else{
        return false;
    }
}
const isnumber =isleapYear(1960);
console.log(isnumber);