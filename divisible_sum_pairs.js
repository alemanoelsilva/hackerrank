/**
 *
 * @param {integer} arrayLength
 * @param {integer} divisible
 * @param {array} array
 *
 * arrayLength = 6
 * divisible = 3
 * array = [1, 2, 3, 4, 5, 6]
 *
 * @returns {integer}
 */
function divisibleSumPairs(arrayLength, divisible, array) {
  let result = 0;

  for (let i = 0; i < arrayLength; i++) {
    for (let j = i; j < arrayLength; j++) {
      if (i !== j) {
        const sum = array[i] + array[j];

        if (sum % divisible === 0) result += 1;
      }
    }
  }

  return result;
}

function processData() {
  return divisibleSumPairs(6, 3, [1, 2, 3, 4, 5, 6]);
}

console.log(processData());
