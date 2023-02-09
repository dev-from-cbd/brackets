function check(str, bracketsConfig) {
  let config = Object.fromEntries(bracketsConfig);
  let openBrackets = Object.keys(config);
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else {
      if (stack.length === 0 || str[i] !== config[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
