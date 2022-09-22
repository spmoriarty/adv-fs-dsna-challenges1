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
  }
}






module.exports = { reverseSentence, capitalizeFirstLetter, addPunc };
