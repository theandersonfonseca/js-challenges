/*
  Input: s1 = "Silent", s2 = "Listen"
  Output: true

  Input: s1 = "Eggs", s2 = "Near"
  Output: false

  Input: s1 = "Fried", s2 = "Fired"
  Output: true

  Input: s1 = "Car", s2 = "Cat"
  Output: false
*/

function anagram(s1, s2) {
  if (!s1 || !s2 || s1.length !== s2.length) return false;

  const s1CharMap = {};
  const s2CharMap = {};

  for (let i = 0; i < s2.length; i++) {
    s1CharMap[s1[i].toLowerCase()] = s1CharMap[s1[i]] + 1 || 1;
    s2CharMap[s2[i].toLowerCase()] = s2CharMap[s2[i]] + 1 || 1;
  }

  for (let char of s1) {
    if (s1CharMap[char] !== s2CharMap[char]) return false;
  }

  return true;
}

function anagram2(s1, s2) {
  if (!s1 || !s2 || s1.length !== s2.length) return false;

  return (
    s1.toLowerCase().split('').sort().join('') ===
    s2.toLowerCase().split('').sort().join('')
  );
}

module.exports = {
  anagram,
  anagram2,
};
