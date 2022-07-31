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
 
//
function lifeInWeeks(age){
    var yearsRemaining = 90 -age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining *12;
    console.log("You have " + days + " days, " + weeks + "weeks, and " + months + " months left.");
}

function calcBottles(startingMoney, costPerBottle){
    var numberOfBottles = Math.floor(startingMoney/ costPerBottle);
    return numberOfBottles;
}

function calcChange(startingMoney, costPerBottle){
    var change = startingMoney % costPerBottle;
    return change;
}