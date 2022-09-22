function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}
//Title-case-words

function capitalizeFirstLetter(string) {
  return string
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

//add punctuation
function addPunc(string) {
  return function addPunc(x) {
    return (`${x}${string}`);
  };
}

//Oddish or evenish challenge
function OddEve(number) {
  let numeral = 0;
  String(number).split('').map(number => numeral += Number(number));
  return numeral % 2 === 0 ? 'oddish' : 'evenish';
}

function anagram(string1, string2) {
  const fire = string1.split('');
  const water = string2.split('');
  return fire.map(letter => water.includes(letter)).includes(true) ? true : false;
}

function findArr(arr, i) {
  return i >= 0 ? arr[i] : arr[arr.length + i];
}

function Red(n) {
  const red = n.toString().split('');
  const num = red.map(a => + a);
  const sum = num.reduce((b, c) => b + c);
  return String(sum).split('').length === 1 ? sum : Red(sum);
}




module.exports = { reverseSentence, capitalizeFirstLetter, addPunc, OddEve, anagram, findArr, Red };
