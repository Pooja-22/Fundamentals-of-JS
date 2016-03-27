/**
 * Created by pooja on 27/3/16.
 */

var a = 30;
var b = "Scope Chain";
function one (){
    var a = 10;
    console.log("one",a);
    two();
}

function two (){
    var a = 20;
    console.log("two",a);
    three();
}
/*
    a = 30 as first it will search for a in its scope,then its outer scope and so on until the global scope.
 */

function three () {
    var a = 40;
    function four(){
        console.log("three",a,b); // 40 , Search for b in "four" scope (not found), then in 'three' scope (not found) and then in global scope.
    }
    four();
}

one();

console.log("Global",a);
