function sortOfInt(A, B) {
  return A > B ? 1 : A < B ? -1 : 0;
}

function findUnique(number, indice, array) {
  return array[indice - 1] !== number && array[indice + 1] !== number;
}

/**
 *
 * @param {array} integers
 *
 * [1, 1, 2, 2, 3, 3, 4]
 */
function lonelyInteger(integers) {
  return integers.sort(sortOfInt).find(findUnique);
}

const INTEGERS = [1, 2, 3, 4, 3, 1, 4];

function processData() {
  return lonelyInteger(INTEGERS);
}

console.log(processData());
