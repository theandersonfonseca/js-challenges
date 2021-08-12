/*
  Input: s = "Level"
  Output: true

  Input: s = "Dog"
  Output: false

  Input: s = "Racecar"
  Output: true

  Input: s = "Table"
  Output: false
*/

module.exports = {
  // First solution
  palindrome(s) {
    const len = Math.floor(s.length / 2);

    for (let i = 0; i < len; i++) {
      if (s[i].toLowerCase() !== s[s.length - i - 1].toLowerCase())
        return false;
    }

    return true;
  },

  // Second solution
  palindrome2(s) {
    let reverseString = '';

    for (let i = s.length - 1; i >= 0; i--) {
      reverseString += s[i];
    }

    return reverseString.toLowerCase() === s.toLowerCase();
  },

  // Third solution
  palindrome3(s) {
    const stringLowerCase = s.toLowerCase();

    return stringLowerCase === stringLowerCase.split('').reverse().join('');
  },
};
