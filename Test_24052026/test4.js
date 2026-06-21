function isValidJsOperatorsIdentifier(name) {
  // Rule 1: Must be a non-empty string after trimming
  if (typeof name !== 'string') return false;
  
  const trimmed = name.trim();
  if (trimmed === '') return false;

  // Rule 4: Reject specified reserved words
  const reservedWords = ['typeof', 'delete', 'void', 'in', 'instanceof', 'new'];
  if (reservedWords.includes(trimmed)) return false;

  // Rules 2 & 3: Standard JavaScript identifier regex
  // start with a letter, underscore, or dollar sign
  const identifierRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
  return identifierRegex.test(trimmed);
}
console.log(isValidJsOperatorsIdentifier("loginButton"));
console.log(isValidJsOperatorsIdentifier("$submit"));
console.log(isValidJsOperatorsIdentifier("1login"));
console.log(isValidJsOperatorsIdentifier("typeof"));