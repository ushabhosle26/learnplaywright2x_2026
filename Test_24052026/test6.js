function getJsOperatorsKeywordMeaning(term) {
	if (typeof term !== 'string') return 'unknown';

	const key = term.trim().toLowerCase();

	const mapping = {
		'===': 'strict-equality',
		'==': 'loose-equality',
		'!==': 'strict-inequality',
		'!=': 'loose-inequality',
		'??': 'nullish-coalescing',
		'?.': 'optional-chaining',
		'&&': 'logical-and',
		'||': 'logical-or',
		'!': 'logical-not',
		'>': 'greater-than',
		'<': 'less-than',
		'>=': 'greater-than-or-equal',
		'<=': 'less-than-or-equal',
		'=': 'assignment',
		'+': 'addition-or-concatenation',
		'? :': 'ternary' // unlikely exact, kept for reference
	};

	return mapping[key] || 'unknown';
}

// Examples for requested cases
console.log(getJsOperatorsKeywordMeaning('===')); // "strict-equality"
console.log(getJsOperatorsKeywordMeaning(' ?? ')); // "nullish-coalescing"
console.log(getJsOperatorsKeywordMeaning("&&"));
console.log(getJsOperatorsKeywordMeaning("not-a-topic"));
