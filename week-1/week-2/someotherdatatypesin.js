//DATATYPES
//1. PRIMITIVE
//7 TYPES:  String, Number, Boolean , Null, Undefined, symbol, BigInt
const Id = Symbol('jhl');
const anotherId = Symbol('jhl');
console.log(Id === anotherId);

//2. REFERENCE(NON-PRIMITIVE)
//Array
const fruits = ["strawberry", "kiwi", "oranges"];

//Objects
const MyObj = {
    name: "Ramandeep kaur",
    age: 18
}

// Functions
const MyFunction = function () {
    console.log("Hello world");
}

// return datatypes
//null=>object
//array=> objject
//object=> object
// function=> function

