function reverseVowels(str) {
  const vowels = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };

  const strArray = str.split('');

  let i = 0;
  let j = strArray.length - 1;

  while (i < j) {
    if (vowels[str[i]] && vowels[str[j]]) {
      [strArray[i], strArray[j]] = [strArray[j], strArray[i]];

      i++;
      j--;
    } else if (vowels[strArray[i]]) {
      j--;
    } else {
      i++;
    }
  }

  return strArray.join('');
}

function reverseVowels2(str) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  const strArray = str.split('');
  const vowelsToReverse = strArray.filter((s) => vowels.includes(s));

  const result = strArray.reduce(
    (acc, s) =>
      vowels.includes(s) ? (acc += vowelsToReverse.pop()) : (acc += s),
    ''
  );

  return result;
}

module.exports = {
  reverseVowels,
  reverseVowels2,
};
