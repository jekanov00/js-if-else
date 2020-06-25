// if-else
console.log('%c' + 'if-else:', 'font-weight: bold;');

// 1.
console.log('1.');

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
console.log('2.');

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
console.log('3.');

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
console.log('4.');

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
console.log('5.');

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
console.log('6.');

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
console.log('7.');

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
console.log('8.');

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
console.log('%c' + 'Логические переменные:', 'font-weight: bold;');
// 1.
console.log('1.');

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
console.log('2.');


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
console.log('%c' + '&&, ||:', 'font-weight: bold;');
// 1.
console.log('1.');

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
console.log('2.');

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
console.log('3.');

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
console.log('4.');

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

// switch-case
console.log('%c' + 'switch-case:', 'font-weight: bold;');
// 1.
console.log('1.');

const num = 1;
let result;

switch (num) {
  case 1: {
    result = 'Зима';
  }
    break;
  case 2: {
    result = 'Весна';
  }
    break;
  case 3: {
    result = 'Лето';
  }
    break;
  case 4: {
    result = 'Осень';
  }
    break;
}

console.log(`num(${num}) = `, result);
console.log('');

// 2.
console.log('2.');

const day = 24;
let dec;
let res2;

if (day >= 1 && day <= 10) {
  dec = 1;
} else if (day >= 11 && day <= 20) {
  dec = 2;
} else {
  dec = 3;
}
switch (dec) {
  case 1: {
    res2 = 'first decade';
  }
    break;
  case 2: {
    res2 = 'second decade';
  }
    break;
  case 3: {
    res2 = 'third decade';
  }
    break;
}

console.log(`day(${day}) = `, res2);
console.log('');

// 3.
console.log('3.');

const month = 6;
let res3;

switch (month) {
  case 1:
  case 2:
  case 12: {
    res3 = 'Зима';
  }
    break;
  case 3:
  case 4:
  case 5: {
    res3 = 'Весна';
  }
    break;
  case 6:
  case 7:
  case 8: {
    res3 = 'Лето';
  }
    break;
  case 9:
  case 10:
  case 11: {
    res3 = 'Осень';
  }
    break;
}

console.log(`month(${month}) = `, res3);
console.log('');

// 4.
console.log('4.');

const str1 = 'abcde';
let res4;

switch (str1[0]) {
  case 'a': {
    res4 = 'yes';
  }
    break;
  default: {
    res4 = 'no';
  }
    break;
}

console.log(`${str1} = `, res4);
console.log('');

// 5.
console.log('5.');

const str2 = '12345';
let res5;

switch (str2[0]) {
  case '1':
  case '2':
  case '3': {
    res5 = 'yes';
  }
    break;
  default: {
    res5 = 'no';
  }
    break;
}

console.log(`${str2} = `, res5);
console.log('');

// 6.
console.log('6.');

const str3 = '472';
let res6;

res6 = Number(str3[0]) + Number(str3[1]) + Number(str3[2]);

console.log(`${str3}(${str3[0]} + ${str3[1]} + ${str3[2]}) = `, res6);
console.log('');

// 7.
console.log('7.');

const str4 = '438915';
let res7 = 'no';

if (+str4[0] + +str4[1] + +str4[2] === +str4[3] + +str4[4] + +str4[5]){
  res7 = 'yes';
}

console.log(`${str4} = `, res7);
console.log('');