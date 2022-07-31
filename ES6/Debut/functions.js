/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
 


function main(){
    loop(6);
    turnLeft();
    loop(6);
 }
 
 function loop(num){
     
   for(let i =0; i<num; i++){
       move(); }
 }
 