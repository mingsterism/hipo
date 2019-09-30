function confirmEnding(word, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return word.substring(word.length - target.length, word.length) === target;
}

confirmEnding("Bastian", "tian");
