let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);//[ 'apple', 'banana', 'cherry' ]

let number = [3, 1, 4];
number.sort()
console.log(number);//[ 1, 3, 4 ]

let num = [10, 1, 21, 2];
num.sort();
console.log(num);//[ 1, 10, 2, 21 ]

// Natural Sorting, lexicographic Sorting)
num.sort((a, b) => a - b); //Ascending
console.log(num);//[ 1, 2, 10, 21 ]

num.sort((a, b) => b - a);//Descending
console.log(num);//[ 21, 10, 2, 1 ]