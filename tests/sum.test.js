function sum(a, b) {
  return a + b;
}

test('soma 2 + 3 e retorna 5', () => {
  expect(sum(2, 3)).toBe(5);
});
