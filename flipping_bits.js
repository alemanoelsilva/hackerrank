// /00000000000000000000000000000001

function convertToBinary(x) {
  let bin = 0;
  let i = 1;

  while (x != 0) {
    const rem = x % 2;
    x = parseInt(x / 2);
    bin = bin + rem * i;
    i = i * 10;
  }

  return bin.toString().padStart(32, 0);
}

function flippingBits(integer) {
  let result = convertToBinary(integer);

  return result;
}

function processData() {
  return flippingBits(0);
}

console.log(processData());
