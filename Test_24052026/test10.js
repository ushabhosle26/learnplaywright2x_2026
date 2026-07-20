function  questionName(input) {
    // Initialize counters
    let passedCount = 0;
    let failedCount = 0;
    let skippedCount = 0;
    
    // Total number of tests
    const totalTests = input.length;

    // Standard for loop to iterate through the array
    for (let i = 0; i < input.length; i++) {
        const result = input[i];
        
        if (result === "pass") {
            passedCount++;
        } else if (result === "fail") {
            failedCount++;
        } else if (result === "skip") {
            skippedCount++;
        }
    }

    // Calculate pass rate percentage safely (avoid division by zero)
    const passRate = totalTests > 0 ? ((passedCount / totalTests) * 100).toFixed(2) : "0.00";

    // Determine the verdict based on rules
    let verdict = "";
    if (failedCount === 0 && totalTests > 0) {
        verdict = "Ready for release";
    } else if (failedCount <= 2) {
        verdict = "Minor failures. Review before release";
    } else {
        verdict = "Block release";
    }

    // Print the test report
    //console.log("=============================");
    //console.log("        TEST REPORT          ");
    //console.log("=============================");
    console.log(`Total Tests : ${totalTests}`);
    console.log(`Passed      : ${passedCount}`);
    console.log(`Failed      : ${failedCount}`);
    console.log(`Skipped     : ${skippedCount}`);
    console.log(`Pass Rate   : ${passRate}%`);
    //console.log("-----------------------------");
    console.log(`Verdict     : ${verdict.toUpperCase()}`);
    //console.log("=============================");
    //return(0);

const testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
questionName(testResults);
}