const { 
  reverseSentence,
  capitalizeFirstLetter,
  addPunc,
  OddEve

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
