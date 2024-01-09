// primitive

// 7 types: String, Number, Boolean, null, udefined, Symbol, BigInt

const id = Symbol('123');
const id2 = Symbol('123');

console.log(id === id2);
// id and id2 are not equal

const bigNumber = 23242455556432525523n; //BigInt


// Reference (non primitive)

// Array, Objects, Functions

const games = ["Cricket", "Football", "Vollyball"];

let obj = {
    name: "Subham",
    age: 20,
}

const myFunction = function(){
    console.log("I am learning from this course");
}

console.log(typeof games);