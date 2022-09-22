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






module.exports = { reverseSentence, capitalizeFirstLetter, addPunc, OddEve };
