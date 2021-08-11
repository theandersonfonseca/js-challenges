/**
  Input: s = "III"
  Output: 3

  Input: s = "IV"
  Output: 4

  Input: s = "XLIX"
  Output: 49

  Input: s = "MMXXI"
  Output: 2021
*/

symbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

module.exports = function romanToInteger(s) {
  let integer = 0;

  for (let i = 0; i < s.length; i++) {
    const current = symbols[s[i]];
    const next = symbols[s[i + 1]];

    current < next ? (integer -= current) : (integer += current);
  }

  return integer;
};
