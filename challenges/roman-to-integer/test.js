const { romanToInteger } = require('./index');

describe('romanToInteger', () => {
  it('Given a roman numeral, convert it to an integer', () => {
    expect(romanToInteger('III')).toBe(3);
    expect(romanToInteger('IV')).toBe(4);
    expect(romanToInteger('XLIX')).toBe(49);
    expect(romanToInteger('MMXXI')).toBe(2021);
  });
});
