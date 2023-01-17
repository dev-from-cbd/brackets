function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = new Set();
  const pairs = new Map();

  for (const [open, close] of bracketsConfig) {
    openBrackets.add(open);
    pairs.set(close, open);
  }

  for (const char of str) {
    if (openBrackets.has(char)) {
      stack.push(char);
    } else if (pairs.has(char)) {
      if (stack.length === 0 || stack[stack.length - 1] !== pairs.get(char)) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
module.exports = check;
