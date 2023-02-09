module.exports = function check(str, bracketsConfig) {
  let config = Object.fromEntries(bracketsConfig);
  let openBrackets = Object.keys(config);
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      if (
        stack.length !== 0 &&
        str[i] === stack[stack.length - 1] &&
        str[i] === config[stack[stack.length - 1]]
      ) {
        stack.pop();
      } else {
        stack.push(str[i]);
      }
    } else {
      if (stack.length === 0) return false;
      let topElement = stack[stack.length - 1];
      if (str[i] === config[topElement]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
