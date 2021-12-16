
function average(numbers) {
  numbers = numbers.filter((value) => !Number.isNaN(value));
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
