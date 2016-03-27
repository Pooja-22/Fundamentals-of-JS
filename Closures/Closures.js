/**
 * Created by pooja on 27/3/16.
 */

function outerFunction (){
    var a = "Pooja Garg";
    return function innerFunction2(){
        return a;
    }
}
var b = outerFunction(); //This function is executed

var c = b(); //Still innerFunction can access the local variable of outerFunction

console.log(c);

function one(){
    var a1 = 10;
    var obj = {
        one : function(value){
            a1 = value;
        },
        two: function(){
            console.log(a1);
        }
    };
    return obj;
}
var func = one();
var set = func.one(30);
var get = func.two();
