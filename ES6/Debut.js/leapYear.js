function isLeap(year){
    var answer = false;

    if( (year%4 === 0 && year%100!==0) || (year%4 ===0 && year%100===0 && year%400===0) ){
        answer = true;
    }



    return answer;
}


console.log(isLeap(2100));