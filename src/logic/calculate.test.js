import calculate from './calculate';

// arrange
const inputDataAdd = {
  total: '18',
  operation: '+',
  next: '555',
};
const inputDataSub = {
  total: '4316',
  operation: '-',
  next: '809',
};
const inputDataMul = {
  total: '305',
  operation: 'x',
  next: '201',
};
const inputDataDiv = {
  total: '8408',
  operation: '÷',
  next: '22',
};
const inputDataMod = {
  total: '4448',
  operation: '%',
  next: '12',
};
const buttonValue = '=';

// act
const outputDataAdd = calculate(inputDataAdd, buttonValue);
const { total: totalAdd } = outputDataAdd;
const outputDataSub = calculate(inputDataSub, buttonValue);
const { total: totalSub } = outputDataSub;
const outputDataMul = calculate(inputDataMul, buttonValue);
const { total: totalMul } = outputDataMul;
const outputDataDiv = calculate(inputDataDiv, buttonValue);
const { total: totalDiv } = outputDataDiv;
const outputDataMod = calculate(inputDataMod, buttonValue);
const { total: totalMod } = outputDataMod;

describe('Calculator Operations', () => {
  test('18 plus 555 is equal 573', () => {
    expect(totalAdd).toBe('573');
  });
  test('4316 minus 809 is equal 3507', () => {
    expect(totalSub).toBe('3507');
  });
  test('305 times 201 is equal 61305', () => {
    expect(totalMul).toBe('61305');
  });
  test('8408 divided by 22 is equal 382.18', () => {
    expect(Number(totalDiv)).toBeCloseTo(382.18);
  });
  test('4448 module 12', () => {
    expect(totalMod).toBe('8');
  });
});
