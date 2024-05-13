// sample.test.js

test('addition test', () => {
  expect(1 + 1).toBe(2);
});

test('subtraction test', () => {
  expect(5 - 3).toBe(2);
});

test('multiplication test', () => {
  expect(2 * 3).toBe(6);
});

test('division test', () => {
  expect(6 / 2).toBe(3);
});



// heavyTests.test.js

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

test('fibonacci of 100', () => {
  expect(fibonacci(10)).toBe(55);
});

test('fibonacci of 50', () => {
  expect(fibonacci(20)).toBe(6765);
});

test('fibonacci of 30', () => {
  expect(fibonacci(30)).toBe(832040);
});

test('fibonacci of 40', () => {
  expect(fibonacci(40)).toBe(102334155);
});


// Sorting a large array
test('sorting large array', () => {
  const array = Array.from({ length: 100000 }, () => Math.random());
  const sortedArray = array.slice().sort();
  expect(sortedArray).toEqual(array.sort());
});


test('sorting large array', () => {
  const array = Array.from({ length: 100000 }, () => Math.random());
  const sortedArray = array.slice().sort();
  expect(sortedArray).toEqual(array.sort());
});

test('sorting large array', () => {
  const array = Array.from({ length: 100000 }, () => Math.random());
  const sortedArray = array.slice().sort();
  expect(sortedArray).toEqual(array.sort());
});