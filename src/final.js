function fizzbuzz(num) {
  if(num % 3 === 0)
    return 'FIZZ'
  if(num % 5 === 0)
    return 'BUZZ'
  return num.toString();
}

module.exports = {
  fizzbuzz
}