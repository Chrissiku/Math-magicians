import operate from '../../logic/operate';

it('Testing operate.js', () => {
  // Arrange
  const n1 = 9;
  const n2 = 3;

  // Act
  const sum = operate(n1, n2, '+');
  const minus = operate(n1, n2, '-');
  const product = operate(n1, n2, 'x');
  const divide = operate(n1, n2, '÷');
  const rem = operate(n1, n2, '%');

  // Assert
  expect(+sum).toBe(12);
  expect(+minus).toBe(6);
  expect(+product).toBe(27);
  expect(+divide).toBe(3);
  expect(+rem).toBe(0);
});
