
export const add = (a, b) => a + b; // obliczamy
export const formatResult = res => ('Result:' + res); // wyświetlamy
export const combineAll = (a, b) => formatResult(add(a, b)); // obliczamy + wyświetlamy

describe('add', () => {
  it('should add 2 numbers properly', () => {
    expect(add(1,3).toBe(4));
    expect(add(1,4).toBe(5));
  });
});

describe('formarResult', () => {
  it('should return proper text', () => {
    expect(formatResult(100)).toBe('Result: 100');
    expect(formatResult(50)).toBe('Result: 50');
  });
});

describe('add and formatResult', () => {
  it('should show text result of adding two numbers', () => {
    const addResult = add(1,2);
    const formattedResult = formatResult(addResult);
    expect(formattedResult).toBe('Result: 3');
  });
});

describe('combineAll', () => {
  it('should show text result of adding two numbers', () => {
    const formattedResult = combineAll(1,2);
    expect(formattedResult).toBe('Result: 3');
  });
});
