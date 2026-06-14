

// Sample input array containing test results
const testResults = ["pass", "fail", "pass", "skip", "pass", "fail", "pass", "pass", "skip", "pass"];

// Initialize result counters
let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Loop through each result in the array using a standard for loop
for (let i = 0; i < testResults.length; i++) {
    const result = testResults[i];
    
    if (result === "pass") {
        passCount++;
    } else if (result === "fail") {
        failCount++;
    } else if (result === "skip") {
        skipCount++;
    }
}

// Calculate totals and metrics
const totalTests = testResults.length;
// Guard against division by zero if the array is empty
const passRate = totalTests > 0 ? ((passCount / totalTests) * 100).toFixed(2) : 0;

// Determine release verdict rules
let verdict = "";
if (failCount === 0) {
    verdict = "Ready for release";
} else if (failCount <= 2) {
    verdict = "Review";
} else {
    verdict = "Block release";
}

// Print the final Test Report
console.log("========================================");
console.log("             TEST SUITE REPORT          ");
console.log("========================================");
console.log(`Total Tests Run : ${totalTests}`);
console.log(`Passed          : ${passCount}`);
console.log(`Failed          : ${failCount}`);
console.log(`Skipped         : ${skipCount}`);
console.log(`Pass Rate       : ${passRate}%`);
console.log("----------------------------------------");
console.log(`VERDICT         : ${verdict.toUpperCase()}`);
console.log("========================================");
