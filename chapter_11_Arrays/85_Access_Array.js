// Accessing & Modifying
let statuses = new Array("pass", "fail", "skip");
// console.log(statuses[0]);//pass
// console.log(statuses[2]);//skip

console.log(statuses[0]);//pass
console.log(statuses[1]);//fail
console.log(statuses[2]);//skip
console.log(statuses[3]);//undefined

//let statuses = ["pass", "fail", "skip"];
console.log(statuses.at(-1));//skip
console.log(statuses.at(-2));//fail
console.log(statuses.at(-3));//pass
console.log(statuses.at(-4));//undefined

// Modify
statuses[1] = "blocked";
console.log(statuses);