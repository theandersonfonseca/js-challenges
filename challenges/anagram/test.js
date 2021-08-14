const methods = require('./index');

describe('Angram', () => {
  it('Should return true if strings are anagrams', () => {
    expect(methods.anagram('Silent', 'Listen')).toBe(true);
    expect(methods.anagram('Eggs', 'Near')).toBe(false);
    expect(methods.anagram('Fried', 'Fired')).toBe(true);
    expect(methods.anagram('Car', 'Cat')).toBe(false);

    expect(methods.anagram2('Silent', 'Listen')).toBe(true);
    expect(methods.anagram2('Eggs', 'Near')).toBe(false);
    expect(methods.anagram2('Fried', 'Fired')).toBe(true);
    expect(methods.anagram2('Car', 'Cat')).toBe(false);
  });
});
