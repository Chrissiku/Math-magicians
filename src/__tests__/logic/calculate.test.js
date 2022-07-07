import calculate from '../../logic/calculate';

it('Test Calculate JS', () => {
  // Arrange
  const OBJ = { total: 0, next: null, operation: null };

  // ACT
  let result = calculate(OBJ, '9');
  result = calculate(result, '+');
  result = calculate(result, '7');
  result = calculate(result, '=');

  // Assert
  expect(+result.total).toBe(16);
});
