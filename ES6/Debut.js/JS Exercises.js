function test(){
    var a= "3"
    var b= "8";

    //
    var c = a;
    a=b;
    b=c;


    //
    console.log("a is "+a);
    console.log("b is "+b);
}

test();


// EX2
var inp = prompt("What is your name");

var first = inp.slice(0,1).toUpperCase();
var second = inp.slice(1,inp.length).toLowerCase();
alert("Hello, "+first+second);