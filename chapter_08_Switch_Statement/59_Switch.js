let day = 3;
// 1 - mon, 2. - tue
let a = 10;
let b = 30;
switch (day) {
    case 1:
        console.log('Mon');
        break;
    case 2:
        console.log('Tue');
        // let a = 10;
        // let b = 30;
        console.log(a + b);
        break;
    case 3:
        console.log('Wed');
        // let a = 10;
        // let b = 30;
        console.log(b - a);
        break;
    case 4:
        console.log('Thur');
        //let a = 10;
        //let b = 30;
        console.log(a * b);
        break;
    case 5:
        console.log('Fri');
        //let a = 10;
        //let b = 30;
        console.log(b + a);
        break;
    case 6:
        console.log('Sat');
        //let a = 10;
        //let b = 30;
        console.log(b % a);
        break;
    case 7:
        console.log('Sun');
        break;
    default:
        console.log("No idea which day it is");
}