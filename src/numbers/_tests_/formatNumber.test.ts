import { formatNumber } from '../index';

describe('formatNumber', () => {
  it('Should format number with comma as separator (default case)', () => {
    expect(formatNumber(1234567)).toBe('1,234,567');
  });

  it('Should format number with dot as separator', () => {
    expect(formatNumber(1234567, { separator: 'dot' })).toBe('1.234.567');
  });

  it('Should handle numbers passed as strings', () => {
    expect(formatNumber('1234567')).toBe('1,234,567');
    expect(formatNumber('1234567', { separator: 'dot' })).toBe('1.234.567');
  });

  it('Should format decimal numbers correctly', () => {
    expect(formatNumber(1234567.89)).toBe('1,234,567.89');
    expect(formatNumber(1234567.89, { separator: 'dot' })).toBe('1.234.567,89');
  });

  it('Should throw an error if it is not a valid number', () => {
    expect(() => formatNumber('test')).toThrowError('Invalid number');
  });
});
