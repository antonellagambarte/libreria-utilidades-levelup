export function formatNumber(
    value: number | string,
    options?: { separator?: 'comma' | 'dot' }
  ): string {
    const number = typeof value === 'string' ? parseFloat(value) : value;
  
    if (isNaN(number)) {
      throw new Error('Invalid number');
    }
  
    const separator = options?.separator || 'comma';
  
    if (separator === 'dot') {
      return number.toLocaleString('de-DE');
    }
  
    return number.toLocaleString('en-US');
  }
  