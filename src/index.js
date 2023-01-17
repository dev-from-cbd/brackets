function check(str, bracketsConfig) {
  const stack = [];
  for (const char of str) {
    for (const config of bracketsConfig) {
      if (char === config[0]) {
        stack.push(config[1]);
      } else if (char === config[1]) {
        if (stack.pop() !== char) {
          return false;
        }
      }
    }
  }
  return stack.length === 0;
}
