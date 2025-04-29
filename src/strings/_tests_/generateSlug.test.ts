import { slugify } from '../index';

describe('slugify', () => {

  it('Should handle an empty string', () => {
    expect(slugify('')).toEqual('');
  });

  it('Should convert spaces to hyphens', () => {
    const input = 'Hello World';
    const output = 'hello-world';
    expect(slugify(input)).toEqual(output);
  });

  it('Should normalize accented characters', () => {
    const input = 'El Niño';
    const output = 'el-nino';
    expect(slugify(input)).toEqual(output);
  });

  it('Should handle multiple spaces between words', () => {
    const input = 'Hello   World';
    const output = 'hello-world';
    expect(slugify(input)).toEqual(output);
  });

  it('Should trim leading and trailing spaces and hyphens', () => {
    const input = '  Hello World  ';
    const output = 'hello-world';
    expect(slugify(input)).toEqual(output);
  });

  it('Should convert multiple hyphens into one', () => {
    const input = 'Hello----World';
    const output = 'hello-world';
    expect(slugify(input)).toEqual(output);
  });

  it('Should remove non-alphanumeric characters except hyphens', () => {
    const input = 'Hello@123#World!';
    const output = 'hello-123-world';
    expect(slugify(input)).toEqual(output);
  });

  it('Should remove special characters', () => {
    const input = 'Hello@World!';
    const output = 'hello-world';
    expect(slugify(input)).toEqual(output);
  });
});
