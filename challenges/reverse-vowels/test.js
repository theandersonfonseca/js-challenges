const { reverseVowels, reverseVowels2 } = require('./index');

describe('Reverse Vowels', () => {
  it('Should return string with reverse vowels', () => {
    expect(reverseVowels('hello')).toBe('holle');
    expect(reverseVowels('sauce')).toBe('seuca');
    expect(reverseVowels('cottage')).toBe('cettago');
    expect(reverseVowels('javascript')).toBe('jivascrapt');

    expect(reverseVowels2('hello')).toBe('holle');
    expect(reverseVowels2('sauce')).toBe('seuca');
    expect(reverseVowels2('cottage')).toBe('cettago');
    expect(reverseVowels2('javascript')).toBe('jivascrapt');
  });
});
