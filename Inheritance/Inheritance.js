/**
 * Created by pooja on 27/3/16.
 */

var obj1 = {
  firstName : "Pooja",
    lastName : "Garg"
};

var obj2 = {
    address : "1",
    college : "2"
};
/*
now __proto__ of obj1 contains the properties defined in obj2, so we can access the properties of obj2 in obj1 See line 29
 */

obj1.__proto__ = obj2;

console.log("object", obj1.address);

/*
Obj3 now contains all the properties of obj1.
 */

var obj3 = Object.create(obj1);
obj3.newProperty  = "Inheritance";
console.log("new Object",obj3.firstName,obj3.address,obj3.newProperty);


