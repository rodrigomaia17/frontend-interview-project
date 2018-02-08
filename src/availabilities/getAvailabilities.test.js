
import getAvailabilities from './getAvailabilities';

describe('#getAvailabilities', () => {
  it('is a function', () => {
    expect(typeof getAvailabilities).toBe('function');
  });

  // TODO: remove this and replace with proper testcases
  it('returns 2 availabilities', () => {
    expect(getAvailabilities({}, {}).length).toBe(2);
  });
});
