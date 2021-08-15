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
function stringParse(strings, queries) {
  return queries.map((query) =>
    strings.reduce((acc, string) => (string === query ? acc + 1 : acc), 0)
  );
}

const STRINGS = [
  "abcde",
  "sdaklfj",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
  "na",
  "asdjf",
  "na",
  "basdn",
  "sdaklfj",
  "asdjf",
];
const QUERIES = ["abcde", "sdaklfj", "asdjf", "na", "basdn"];

function processData() {
  return stringParse(STRINGS, QUERIES);
}

console.log(processData());
