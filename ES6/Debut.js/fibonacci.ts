function fibonacciGen(num: number){
    const output:number[]=[];
    if(num === 1){
        output.push(0);
    }else if (num===2){
        output.push(0);
        output.push(1);
    }
    else{
        output.push(0);
        output.push(1);
        for(let i =2;i<num;i++){
            output.push(output[i-2] + output[i-1]);
        }

    }


}

let output = fibonacciGen(5);
console.log(output);