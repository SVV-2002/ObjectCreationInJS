//Person Object Creation
function Person(first,last,address) {
    this.FirstName=first;
    this.LastName=last;
    this["Office Address"]=address;
}

//Person1
var person1=new Person("Vaishnavi","Vinnakota","Visakhapatnam");
console.log("Person 1 Properties:");
console.log(person1);
console.log("FirstName: "+person1.FirstName);
console.log("LastName: "+person1.LastName);
console.log("OfficeAddress: "+person1["Office Address"]);
console.log("");

//Person2
var person2=new Person("Sneha","Garuda","Hyderabad");
console.log("Person 2 Properties:");
console.log(person2);
console.log("FirstName: "+person2.FirstName);
console.log("LastName: "+person2.LastName);
console.log("OfficeAddress: "+person2["Office Address"]);
console.log("");

//Person3
var person3=new Person("Sravanthi","Garuda","Kakinada");
console.log("Person 1 Properties:");
console.log(person3);
console.log("FirstName: "+person3.FirstName);
console.log("LastName: "+person3.LastName);
console.log("OfficeAddress: "+person3["Office Address"]);
console.log("");