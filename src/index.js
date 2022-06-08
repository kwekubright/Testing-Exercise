// Write a function stringLength(string) that takes any string as an argument and returns its characters count.

const stringLength = (string) => {
  if (10 > string.length > 0) {
    return string.length;
  } else {
    throw new Error('string must be between 1 and 10 characters');
  }
}

module.exports = stringLength;