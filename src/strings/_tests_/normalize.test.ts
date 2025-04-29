import { normalizeString } from '../index';

describe('normalizeString', () => {

  it('Should handle an empty string', () => {
    expect(normalizeString('')).toEqual('');
  });
      
  it('Should normalize accented characters', () => {
    expect(normalizeString('café')).toEqual('cafe');
  });

  it('Should remove diacritics', () => {
    expect(normalizeString('áéíóú')).toEqual('aeiou');
  });

  it('Should convert ñ to n', () => {
    expect(normalizeString('niño')).toEqual('nino');
  });

  it('Should return the same string if no normalization is needed', () => {
    expect(normalizeString('normal')).toEqual('normal');
  });

  it('should handle strings with multiple special characters', () => {
    const input = 'acción, álbum';
    const output = 'accion, album';
    expect(normalizeString(input)).toEqual(output);
  });
});
