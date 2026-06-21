function summarizeJsOperatorsResults(results) {
  return results.reduce((summary, item) => {
    const label = item.toLowerCase();
    if (label.includes('pass')) summary.passed++;
    else if (label.includes('fail')) summary.failed++;
    else if (label.includes('skip')) summary.skipped++;
    summary.total++;
    return summary;
  }, { total: 0, passed: 0, failed: 0, skipped: 0 });
}

// Example usage
const labels = ["passed", "failed", "skipped", "passed", "unknown"];
console.log(summarizeJsOperatorsResults(labels));
