var tweet = prompt("Enter your Tweet");
var tweetCount = tweet.length;


alert("You ahve written "+ tweetCount + " chrachters, you have " + (140-tweetCount) +" charachters left");
var tweetCut = tweet.slice(0,140);
alert("Your tweet is --> "+ tweetCut);

// Slicing
// var stig = "Angela";
// console.log(stig.slice(1,2));

// tweet.toUpperCase();



