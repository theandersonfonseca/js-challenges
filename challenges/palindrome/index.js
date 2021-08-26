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

function palindrome(s) {
  const len = Math.floor(s.length / 2);

  for (let i = 0; i < len; i++) {
    if (s[i].toLowerCase() !== s[s.length - i - 1].toLowerCase()) return false;
  }

  return true;
}

function palindrome2(s) {
  let reverseString = '';

  for (let i = s.length - 1; i >= 0; i--) {
    reverseString += s[i];
  }

  return reverseString.toLowerCase() === s.toLowerCase();
}

function palindrome3(s) {
  const stringLowerCase = s.toLowerCase();

  return stringLowerCase === stringLowerCase.split('').reverse().join('');
}

module.exports = {
  palindrome,
  palindrome2,
  palindrome3,
};
