// stack(primitive)  ----   Heap(non primitive)

//primitive
let user = "debashis";
let user2 = user;
user2 = "rakesh";
console.log(user);
console.log(user2);

//non primitive
let friend1 = {
    name: "debashis",
    sub: "History",
}
let friend2 = friend1;

friend2.sub = "Physics";    //sub of object1 is chage because it takes reference of it

console.log(friend1.sub);  
console.log(friend2.sub);