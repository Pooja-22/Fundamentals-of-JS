/**
 * Created by pooja on 27/3/16.
 */

"use strict";

/*
 Function add will be available here due to hoisting
 */

add(); // Addition NaN

console.log(add, "function");

/*
 It will throw error for c as it will declared at the top of the scope in which it is created, so it will only be available in function
 add().
 */

console.log(a, b, c, "variables");

function add() {
    var c = a + b;
    console.log("Addition", c);
}

var a = 5, b = 5;

add(); //Addition 10

/*
 Code when executed
 */

/*
 var a;
 var b;
 function(){
 var c;
 var a;
 var b;
 var c = a + b;
 console.log("Addition",c);
 }

 add();
 console.log(add,"function");

 function add (){
 var c = a + b;
 console.log("Addition",c);
 }

 var a = 5 , b = 5;
 add();
 */

/*
 In javascript variables are declared at the top of the scope in which they are created and defined where they are physically
 written in the code but functions with their body get hoisted at the top.
 If function is defined in this way --> var add = function(){} , then it will act as variable.
 */