const isFizz = num => num % 3 === 0
const isBuzz = num => num % 5 === 0

function fizzbuzz(num) {
  if(isFizz(num) && isBuzz(num))
    return 'FIZZBUZZ'
  if(isFizz(num))
    return 'FIZZ'
  if(isBuzz(num))
    return 'BUZZ'
  return num.toString();
}

module.exports = {
  fizzbuzz
}
