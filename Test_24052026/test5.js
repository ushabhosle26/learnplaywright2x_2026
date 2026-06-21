function classifyJsOperatorsScore(score)  {
	if (typeof score !== 'number' || Number.isNaN(score)) {
		return 'INVALID_SCORE';
	}

	if (score >= 90) return 'EXCELLENT';
	if (score >= 75) return 'GOOD';
	if (score >= 50) return 'NEEDS_PRACTICE';
	return 'REVISIT';
}

// Example usage:
console.log(classifyJsOperatorsScore(95)); // EXCELLENT
console.log(classifyJsOperatorsScore(80)); // GOOD
console.log(classifyJsOperatorsScore(65)); // NEEDS_PRACTICE
console.log(classifyJsOperatorsScore(40)); // REVISIT
console.log(classifyJsOperatorsScore('test')); // INVALID_SCORE
