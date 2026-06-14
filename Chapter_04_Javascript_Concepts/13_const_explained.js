const BASE_URL = "https://app.thetestingacademy.com";
// const BASE_URL = "https://app.thetestingacademy.com";
//BASE_URL = "https:/ / staging.thetestingacademy.com";
// TypeError: Assignment to constant variable.

let name = "pending";
name = "done";
 console.log(name);
{
    let name = "Dutta";
    console.log(name,"from block{}");
}

function say() {
    let name = "Dutta";
     console.log(name,"from function");
}
say();
say();