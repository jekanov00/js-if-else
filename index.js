// if-else
console.log('if-else:');

// 1.
console.log('isZero(1) = ', isZero(1));
console.log('isZero(0) = ', isZero(0));
console.log('isZero(-3) = ', isZero(-3));

console.log('');

/**
 *
 * @param {number} a
 * @returns {boolean}
 */
function isZero (a) {
  return a === 0;
}

// 2.
console.log('isOverZero(1) = ', isOverZero(1));
console.log('isOverZero(0) = ', isOverZero(0));
console.log('isOverZero(-3) = ', isOverZero(-3));

console.log('');

/**
 *
 * @param {number} a
 * @returns {boolean}
 */
function isOverZero (a) {
  return a > 0;
}

// 3.
console.log('isBelowZero(1) = ', isBelowZero(1));
console.log('isBelowZero(0) = ', isBelowZero(0));
console.log('isBelowZero(-3) = ', isBelowZero(-3));

console.log('');

/**
 *
 * @param {number} a
 * @returns {boolean}
 */
function isBelowZero (a) {
  return a < 0;
}

// 4.
console.log('isOverEqualZero(1) = ', isOverEqualZero(1));
console.log('isOverEqualZero(0) = ', isOverEqualZero(0));
console.log('isOverEqualZero(-3) = ', isOverEqualZero(-3));

console.log('');

/**
 *
 * @param {number} a
 * @returns {boolean}
 */
function isOverEqualZero (a) {
  return a >= 0;
}

// 5.
console.log('isBelowEqualZero(1) = ', isBelowEqualZero(1));
console.log('isBelowEqualZero(0) = ', isBelowEqualZero(0));
console.log('isBelowEqualZero(-3) = ', isBelowEqualZero(-3));

console.log('');

/**
 *
 * @param {number} a
 * @returns {boolean}
 */
function isBelowEqualZero (a) {
  return a <= 0;
}

// 6.
console.log('isNotZero(1) = ', isNotZero(1));
console.log('isNotZero(0) = ', isNotZero(0));
console.log('isNotZero(-3) = ', isNotZero(-3));

console.log('');

/**
 *
 * @param {number} a
 * @returns {boolean}
 */
function isNotZero (a) {
  return a !== 0;
}

// 7.
console.log('isTest(1) = ', isTest('test'));
console.log('isTest(0) = ', isTest('тест'));
console.log('isTest(-3) = ', isTest(3));

console.log('');

/**
 *
 * @param {string} a
 * @returns {boolean}
 */
function isTest (a) {
  return a === 'test';
}

// 8.
console.log('isStringOne(1) = ', isStringOne('1'));
console.log('isStringOne(0) = ', isStringOne(1));
console.log('isStringOne(-3) = ', isStringOne(3));

console.log('');

/**
 *
 * @param {string} a
 * @returns {boolean}
 */
function isStringOne (a) {
  return a === '1';
}

// Логические переменные
console.log('Логические переменные:');
// 1.
let test = true;

if (test) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

test = false;

console.log(test ? 'Верно' : 'Неверно');

console.log('');

// 2.
test = true;

if (!test) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

test = false;

console.log(!test ? 'Верно' : 'Неверно');

console.log('');

// Работа с && , ||
console.log('&&, ||:');
// 1.
console.log('isOver0Under5(5) = ', isOver0Under5(5));
console.log('isOver0Under5(0) = ', isOver0Under5(0));
console.log('isOver0Under5(-3) = ', isOver0Under5(-3));
console.log('isOver0Under5(2) = ', isOver0Under5(2));

console.log('');

/**
 *
 * @param {number} a
 * @return {boolean|boolean}
 */
function isOver0Under5 (a) {
  return a > 0 && a < 5;
}

// 2.

console.log('a === 0 || a === 2 ? a += 7 : a /= 10 , a=(5) = ', second(5));
console.log('a === 0 || a === 2 ? a += 7 : a /= 10 , a=(0) = ', second(0));
console.log('a === 0 || a === 2 ? a += 7 : a /= 10 , a=(-3) = ', second(-3));
console.log('a === 0 || a === 2 ? a += 7 : a /= 10 , a=(2) = ', second(2));

console.log('');

/**
 *
 * @param {number} a
 * @return {number}
 */
function second (a) {
  return a === 0 || a === 2 ? a += 7 : a /= 10;
}

// 3.

console.log('a <= 1 && b >= 3 ? a + b : a - b , (1, 3) = ', third(1, 3));
console.log('a <= 1 && b >= 3 ? a + b : a - b , (0, 6) = ', third(0, 6));
console.log('a <= 1 && b >= 3 ? a + b : a - b , (3, 5) = ', third(3, 5));

console.log('');

/**
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function third (a, b) {
  return a <= 1 && b >= 3 ? a + b : a - b;
}

// 4.

console.log('a > 2 && a < 11 || b >= 6 && b < 14 , (7, 6) = ', fourth(7, 6));
console.log('a > 2 && a < 11 || b >= 6 && b < 14 , (1, 14) = ', fourth(1, 14));

console.log('');

/**
 *
 * @param {number} a
 * @param {number} b
 * @return {boolean|boolean}
 */
function fourth (a, b) {
  return a > 2 && a < 11 || b >= 6 && b < 14;
}