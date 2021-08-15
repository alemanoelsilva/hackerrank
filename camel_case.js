process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', (data) => {
  inputString += data
})

process.stdin.on('end', () => {
  inputString = inputString.split('\n').filter(Boolean).map(s => s.trim())

  processData(inputString)
})

const COMBINE = 'C';
const SPLIT = 'S';

const METHOD = 'M';
const CLASS = 'C';
const VARIABLE = 'V';

const UPPER = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'X',
  'Z',
  'Y',
  'W',
];

function camelCaseWordsSpacedWithSpaces(data, way) {
  const _addSpaces = (camelString) =>
    camelString
      .split('')
      .reduce((acc, cur) => {
        if (UPPER.some((upper) => upper === cur))
          return `${acc} ${cur.toLowerCase()}`;

        return `${acc}${cur}`;
      }, '')
      .trim();

  const handler = {
    [METHOD]: (data) => _addSpaces(data.slice(0, data.length - 2)),
    [CLASS]: (data) => _addSpaces(data),
    [VARIABLE]: (data) => _addSpaces(data),
  };

  return handler[way](data);
}

function javascriptWordsWay(data, way) {
  const _addCamel = (string) =>
    string
      .split(' ')
      .reduce(
        (acc, cur, ind) =>
          ind === 0
            ? `${acc}${cur}`
            : `${acc}${cur.slice(0, 1).toUpperCase()}${cur.slice(1, cur.length)}`,
        ''
      );

  const handler = {
    [METHOD]: (data) => `${_addCamel(data)}()`,
    [CLASS]: (data) => _addCamel(`${data.slice(0, 1).toUpperCase()}${data.slice(1, data.length)}`),
    [VARIABLE]: (data) => _addCamel(data),
  };

  return handler[way](data);
}

function camelCase(arg) {
  const [operation, way, data] = arg.split(';');

  if (operation === SPLIT) {
    return camelCaseWordsSpacedWithSpaces(data, way);
  }

  return javascriptWordsWay(data, way);
}

function processData(input = '') {
  input.map(camelCase).forEach(el => console.log(el));
}

