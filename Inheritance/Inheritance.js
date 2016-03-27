/**
 * Created by pooja on 27/3/16.
 */

function base(){
    this.name  = "Pooja";
    this.lastName = "Garg";
}
function one(){
    this.prototype = base();
    console.log(name + " " + lastName);
}
one();

var obj1 = {
  firstName : "Pooja",
    lastName : "Garg"
};

var obj2 = {
    address : "1",
    college : "2"
};

obj1.__proto__ = obj2;

console.log("object", obj1.address);

/*
Obj3 can access the properties defined in obj1.
 */

var obj3 = Object.create(obj1);
obj3.newProperty  = "Inheritance";
console.log("new Object",obj3.firstName,obj3.address,obj3.newProperty);

