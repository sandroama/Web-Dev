// // btn click handler
// function handleClick(){
//     alert("I got clicked");
// }

// for(let i = 0; i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function() {
//         alert("I got clicked!");
//     });
// }


// High order function ex
function add(num1, num2){
    return num1 + num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function calc(num1, num2, operator){
    return operator(num1,num2);
}

console.log(calc(4,5,add));
console.log(calc(4,5,multiply));