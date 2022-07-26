// btn click handler
function handleClick(){
    alert("I got clicked");
}

// Button Press
for(let i = 0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        // console.log(this.innerHTML); 
        
        let buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

        switch (buttonInnerHtml){ 
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

            default:
                console.log(buttonInnerHtml);


        }
       


    });
}



// Keyboard Press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

});


function makeSound(key){

    switch (key){ 
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHtml);


    }

}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");


    setTimeout(function(){
        activeButton.classList.remove("pressed");

    },100);
}
 

// let audio = new Audio('sounds/tom-1.mp3');
//         audio.play();



// // Callback Function

// $0.addEventListener("click",function(event){
//     console.log(event);
// });


// function anotheraddEventListener(typeofEvent,callback){
//     let eventThatHappened = {
//         eventType: "Keypress",
//         key: "p",
//         duration: 2
//     }
//     if (eventThatHappened.eventType === typeofEvent){
//         callback(eventThatHappened);
//     }
// }








//----------------------------
// // High order function ex
// function add(num1, num2){
//     return num1 + num2;
// }

// function multiply(num1,num2){
//     return num1 * num2;
// }

// function calc(num1, num2, operator){
//     return operator(num1,num2);
// }

// console.log(calc(4,5,add));
// console.log(calc(4,5,multiply));