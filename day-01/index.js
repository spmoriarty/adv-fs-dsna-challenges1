function reverseSentence(str) {
  return str
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
}
//Title-case-words

function capitalizeFirstLetter(string) {
  const words = string.split(" ");
  words.map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
  }).join(" ");
}






module.exports = { reverseSentence, capitalizeFirstLetter };
