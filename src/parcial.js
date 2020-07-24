function combinatoria(x, n) {
  if(x<0)
    return 'error: x no debe ser negativo'
  if(n<0)
    return 'error: n no debe ser negativo'
  if(x>n)
    return 'error: x debe ser menor que n'
  return factorial(n)/(factorial(x)*factorial(n-x))
}

function factorial(num) {
  let fact = 1
  for(let i=1; i <= num; i++)
    fact *= i
  return fact
}

module.exports = {
  combinatoria
}
