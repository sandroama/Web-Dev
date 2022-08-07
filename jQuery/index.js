
// $(document).ready(function(){
//     $("h1").css("color","red");
// });

// $("h1").css("color","red");

// document.querySelector("h1");
// $("h1");
// $("button");

// $("h1").css("color","blue");
// console.log($("h1").css("font-size")); // inputing one value is getting the attribute value
// $("h1").css("font-size","5rem"); // inputing 2 values is  setting an attribute to that second value

// $("h1").addClass("big-title margin50");
// // $("h1").removeClass("big-title");

// $("h1").text("bye");
// // $("button").html("<em>This is me</em>");
// $("button").addClass("btn btn-primary btn-outline-secondary");

// $("a").attr("href","https://www.yahoo.com");

// // $("h1").attr("class")

// $("h1").click(function(){
//     $("h1").css("color","blue");
// });





// --- Onclick events ---
// for(let i=0;i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color = "blue";
//     });
// }

// jQuery on click events
$("button").click(function(){
    $("h1").css("color","purple");
});

$("input").keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","cyan");
});


// // --- Adding HTML elements before and after --------------------------
// $(h1).before("<button>New</button>");
// $(h1).after("<button>New</button>");

// $(h1).prepend("<button>New</button>"); // prepend adds before inner html content 
// $(h1).append("<button>New</button>"); // prepend adds after inner html content


// --- Hide and show html elements --------------------------------

$("button").on("click",function(){
    // $("h1").fadeToggle(); // Fade out the element
    // $("h1").slideToggle(); // Slide out the element
    
    $("h1").animate({opacity: 0.5, margin: "20"});
    // https://www.w3schools.com/jquery/jquery_ref_effects.asp

    // $("h1").toggle();
    // $("h1").hide();
});

// $(h1).hide();
// $(h1).show();
 