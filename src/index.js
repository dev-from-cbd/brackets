module.exports = function checkBrackets(str, bracketsConfig) {
  const bracketStack = [];
  const bracketMap = new Map(bracketsConfig);

  for (const char of str) {
    if (bracketMap.has(char)) {
      bracketStack.push(char);
    } else if (bracketMap.values().includes(char)) {
      if (bracketMap.get(bracketStack.pop()) !== char) {
        return false;
      }
    }
  }

  return bracketStack.length === 0;
};
