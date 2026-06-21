let results = ["pass", "fail", "pass", "error", "fail"];

//// indexOf — returns first index, or -1 if not found
console.log(results.indexOf("fail"));//1

console.log(results.indexOf("skip"));//-1


// lastIndexOf — searches from the end
console.log(results.lastIndexOf("fail"));// 4


// includes — returns boolean
console.log(results.includes("error"));//true
console.log(results.includes("skip"));//false


// find — returns first matching element
let num = [10, 25, 30, 45];
let r = num.find(x => x > 20);
console.log(r);//25

// findIndex
console.log(num.findIndex(n => n > 20));//1
console.log(num.findLast(n => n > 20));//45 
console.log(num.findLastIndex(n => n > 20));//3
console.log(num.find(x => x < 45));//10
console.log(num.find(x => x > 25));//30
