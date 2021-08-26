const { palindrome, palindrome2, palindrome3 } = require('./index');

describe('Palindrome', () => {
  it('Should return true if string is a palindrome', () => {
    expect(palindrome('Level')).toBe(true);
    expect(palindrome('Dog')).toBe(false);
    expect(palindrome('Racecar')).toBe(true);
    expect(palindrome('Table')).toBe(false);

    expect(palindrome2('Level')).toBe(true);
    expect(palindrome2('Dog')).toBe(false);
    expect(palindrome2('Racecar')).toBe(true);
    expect(palindrome2('Table')).toBe(false);

    expect(palindrome3('Level')).toBe(true);
    expect(palindrome3('Dog')).toBe(false);
    expect(palindrome3('Racecar')).toBe(true);
    expect(palindrome3('Table')).toBe(false);
  });
});
