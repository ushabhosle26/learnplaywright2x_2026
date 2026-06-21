function normalizeJsOperatorsLabel(label) {
if (typeof label !== 'string') return '';
  const normalized = label
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, ''); // Removes any leftover edge hyphens

  return normalized ? `js-operator-${normalized}` : 'js-operator';
}
console.log(normalizeJsOperatorsLabel(" Login Button "));
console.log(normalizeJsOperatorsLabel("User Profile: Edit!"));
console.log(normalizeJsOperatorsLabel("---Search@@Box---"));
console.log(normalizeJsOperatorsLabel(" "));