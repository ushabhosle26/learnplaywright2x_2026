// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);/*login
checkout
search*/
}

console.log("----");

// for...of (cleanest for values)
for (test of tests) {
    console.log(test);/*login
checkout
search*/
}

console.log("----");

tests.forEach((i, index) => {
    console.log(i, index);/*login 0
checkout 1
search 2*/
});

console.log("----");

let students = ["Methis", "Senthil", "Ajay", "Rahul"];

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
    /*
    0  ->  methis
    1  ->  senthil
    2  ->  ajay
    3  ->  rahul
    */
}

console.log("----");

for (let [i, test] of tests.entries()) {
    console.log(i, test);
    /* 
    0 login
    1 checkout
    2 search 
    */
}