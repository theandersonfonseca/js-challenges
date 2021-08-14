const methods = require('./index');

describe('Palindrome', () => {
  it('Should return true if string is a palindrome', () => {
    expect(methods.palindrome('Level')).toBe(true);
    expect(methods.palindrome('Dog')).toBe(false);
    expect(methods.palindrome('Racecar')).toBe(true);
    expect(methods.palindrome('Table')).toBe(false);

    expect(methods.palindrome2('Level')).toBe(true);
    expect(methods.palindrome2('Dog')).toBe(false);
    expect(methods.palindrome2('Racecar')).toBe(true);
    expect(methods.palindrome2('Table')).toBe(false);

    expect(methods.palindrome3('Level')).toBe(true);
    expect(methods.palindrome3('Dog')).toBe(false);
    expect(methods.palindrome3('Racecar')).toBe(true);
    expect(methods.palindrome3('Table')).toBe(false);
  });
});
