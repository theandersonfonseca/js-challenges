const { balancedBrackets } = require('./index');

describe('Balanced Brackets', () => {
  it('Should return true if brackets are balanced', () => {
    expect(balancedBrackets('()[]{}')).toBe(true);
    expect(balancedBrackets('(]')).toBe(false);
    expect(balancedBrackets('([][{}]){}')).toBe(true);
    expect(balancedBrackets('([[]){}')).toBe(false);
  });
});
