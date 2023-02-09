module.exports = function check(str, bracketsConfig) {
  const open = [];
  const close = [];
  const pairs = {};
  bracketsConfig.forEach((b) => {
    open.push(b[0]);
    close.push(b[1]);
    pairs[b[1]] = b[0];
  });
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (open.includes(char)) {
      stack.push(char);
    } else if (close.includes(char)) {
      if (!stack.length || pairs[char] !== stack.pop()) return false;
    }
  }
  return !stack.length;
};
