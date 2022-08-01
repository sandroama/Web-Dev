const fizbuzz=[];
for(let i=0;i<100;i++){
    if(i%3===0 && i%5===0){
        fizbuzz.push("FizBuzz "+i);
    }else if (i%3===0){
        fizbuzz.push("Fizz " + i);
    }else if(i%5===0){
        fizbuzz.push("Buzz " + i)
    }else{
        fizbuzz.push(i);
    }
}


console.log(fizbuzz);