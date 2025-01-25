const palindromes = function (string) {
  let originalPhrase = string.toUpperCase().split("");
  let reversedPhrase = originalPhrase.slice().reverse();
  let originalPhraseChar = originalPhrase.filter(getOnlyLetters);
  let reversedPhraseChar = reversedPhrase.filter(getOnlyLetters);

  for (let i = 0; i < originalPhraseChar.length; i++) {
    if (originalPhraseChar[i] !== reversedPhraseChar[i]) {
      return false;
    }
  }

  return true;
};

function getOnlyLetters(char) {
  return (char >= "A" && char <= "Z") || (char >= "0" && char <= "9");
}
palindromes("rac3e3car");

// Do not edit below this line
module.exports = palindromes;
