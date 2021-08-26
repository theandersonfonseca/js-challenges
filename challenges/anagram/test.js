const { anagram, anagram2 } = require('./index');

describe('Angram', () => {
  it('Should return true if strings are anagrams', () => {
    expect(anagram('Silent', 'Listen')).toBe(true);
    expect(anagram('Eggs', 'Near')).toBe(false);
    expect(anagram('Fried', 'Fired')).toBe(true);
    expect(anagram('Car', 'Cat')).toBe(false);

    expect(anagram2('Silent', 'Listen')).toBe(true);
    expect(anagram2('Eggs', 'Near')).toBe(false);
    expect(anagram2('Fried', 'Fired')).toBe(true);
    expect(anagram2('Car', 'Cat')).toBe(false);
  });
});
