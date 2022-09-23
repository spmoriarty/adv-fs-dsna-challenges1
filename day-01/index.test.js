const { 
  reverseSentence,
  capitalizeFirstLetter,
  addPunc,
  OddEve,
  anagram,
  findArr,
  Red,
  multiples,
  fizzBuzz

} = require('./index');

describe('primitive code challenges', () => {
  describe('reverseSentence', () => {
    it('should reverse a sentence', () => {
      expect(reverseSentence('alchemy rocks gold')).toBe('ymehcla skcor dlog');
    });
  });
});

it('should capitalize the first letter', () => {
  expect(capitalizeFirstLetter('stop drop and roll')).toEqual('Stop Drop And Roll');
});

it('will add punctuation', () => {
  const addA = addPunc('!!');
  const addB = addPunc('?');
  const stop = addA('go');
  expect(stop).toEqual('go!!');
  expect(addB('where')).toEqual('where?');
});

it('Odd or evenish challenge', () => {
  expect(OddEve('234')).toEqual('evenish');
  expect(OddEve('345')).toEqual('oddish');
});

it('anagram challenge', () => {
  const wordA = 'water';
  const wordB = 'wet';
  const one = 'fire';
  const two = 'hot';
  expect(anagram(wordA, wordB)).toEqual(true);
  expect(anagram(one, two)).toEqual(false);
});

it('finds an array', () => {
  const arr = [1, 2, 3, 4];
  expect(findArr(arr, 2)).toEqual(3);
  expect(findArr(arr, -1)).toEqual(4);
});

it('finds the root digit', () => {
  expect(Red(123)).toEqual(6);
  expect(Red(4322)).toEqual(2);
});

it('multiplies of a given number', () => {
  expect(multiples(5)).toEqual([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
  expect(multiples(25)).toEqual([25, 50]);
});

it('the fizzBuzz game!', () => {
  const array = [
    1, 2, 
    'fizz',
    4,
    'buzz',
    'fizz',
    7,
    8,
    'fizz',
    'buzz',
    11,
    'fizz',
    13,
    14,
    'fizzBuzz'
  ];
  expect(fizzBuzz(15)).toEqual(array);
});

