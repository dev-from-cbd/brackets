function check(str, bracketsConfig) {
  const stack = [];
  const map = new Map(bracketsConfig);
  for (const char of str) {
    if (map.has(char)) {
      stack.push(map.get(char));
    } else if (stack.length === 0 || stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
}
