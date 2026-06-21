function normalizeJsOperatorsLabel(input) {
  if (typeof input !== 'string') return '';
  const normalized = input
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, ''); // Removes any leftover edge hyphens

  return normalized ? `js-operator-${normalized}` : 'js-operator';
}

// --- Examples ---
console.log(normalizeJsOperatorsLabel(" Strict Equality ")); 
// Output: "js-operator-strict-equality"

console.log(normalizeJsOperatorsLabel("  Nullish   coalescing ?? ")); 
// Output: "js-operator-nullish-coalescing"

console.log(normalizeJsOperatorsLabel(" Login Button "));
console.log(normalizeJsOperatorsLabel("User Profile: Edit!"));
console.log(normalizeJsOperatorsLabel("---Search@@Box---"));
console.log(normalizeJsOperatorsLabel(" "));