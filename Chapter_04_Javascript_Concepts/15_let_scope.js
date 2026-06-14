let a = 10; // Global Scope
console.log(a);
// Definition of the function
function printHello() {
    console.log("Hello TheTestingAcademy!");
    let a = 20; // Local Scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); // 30
    }
    console.log("F ->", a);//20
}

console.log("G ->", a);//10

printHello();