let a = [1, 2];
let b = [3, 4];
// let c = a + b;
let c = a.concat(b);
console.log(c);//[ 1, 2, 3, 4 ]

let d = b.concat(a);
console.log(d);//[ 3, 4, 1, 2 ]

// spread (modern way) - concatenation. (...)
let e = [...a, ...b];
console.log(e);//[ 1, 2, 3, 4 ]

// Join 
let s = ["pass", "fail", "skip"].join("|");
console.log(s);//pass|fail|skip