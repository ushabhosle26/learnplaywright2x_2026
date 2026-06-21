//Slicing & Combining
let arr = [1, 2, 3, 4, 5];
//slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 

console.log(arr.slice(1, 3)); //(start, end-1) => (1, 3-1) => (1, 2)   //[ 2, 3 ]

console.log(arr.slice(2, 4));//[ 3, 4 ]
console.log(arr.slice(2, 5));//[ 3, 4, 5 ]

console.log(arr.slice(2));//[ 3, 4, 5 ]

//start from the -1 and till 2. 
console.log(arr.slice(-2));//[ 4, 5 ]

console.log(arr.slice(0));//[ 1, 2, 3, 4, 5 ]

console.log("-----------------------------"); 

let arr1 = [10, 20, 30, 40, 50];
//console.log(arr1);//[ 10, 20, 30, 40, 50 ]
let s = arr1.slice(1, 4);
console.log(arr1);//[ 10, 20, 30, 40, 50 ]
console.log(s);// [20, 30, 40 ]
console.log(arr1);//[ 10, 20, 30, 40, 50 ]
console.log("-----------------------------"); 

let arr2 = [10, 20, 30, 40, 50];
console.log(arr2);//[ 10, 20, 30, 40, 50 ]
let removed = arr2.splice(1, 2);//remove 2 from index 1
//console.log(arr2);//[ 10, 40, 50 ]
console.log(removed);// [20, 30]
console.log(arr2);//[ 10, 40, 50 ]