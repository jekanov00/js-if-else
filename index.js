// if-else
console.log('if-else:')

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