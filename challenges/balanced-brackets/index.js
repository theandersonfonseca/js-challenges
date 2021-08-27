function balancedBrackets(str) {
  const bracketsMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];

    if (bracketsMap[currentBracket]) {
      stack.push(bracketsMap[currentBracket]);
    } else if (currentBracket !== stack.pop()) {
      return false;
    }
  }

  return !stack.length;
}

module.exports = {
  balancedBrackets,
};
