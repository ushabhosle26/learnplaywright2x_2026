// Creating Arrays// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];
console.log(browsers);//[ 'Chrome', 'Firefox', 'Safari' ]

// Array constructor

let scores = new Array(3);// here the 3 is length
scores[0] = 1;
scores[1] = 1;
scores[2] = 1;
scores[3] = null;
scores[4] = undefined;
console.log(scores);//[ 1, 1, 1, null, undefined ]

let scores2 = new Array(1, 2, 3);
console.log(scores2);//[1, 2, 3]

let numbers = new Array(100, 200, 300, 400);//0-3: 4
console.log(numbers);//[100, 200, 300, 400]

let test = Array.of(10, 20, 30, 40, 50, 60);
console.log(test);//[10, 20, 30, 40, 50]

// Array.from()
let chars1 = Array.from("hello");
console.log(chars1);//["h", "e", "l", "l", "o"]

let chars2 = Array.from("world");
console.log(chars2);//["w", "o", "r", "l", "d"]

let numbers1 = Array.from("1234567891011121");
console.log(numbers1);
