const assert = require("assert")

const {
  fizzbuzz
} = require("../src/final")

describe.only("Kata Fizz Buzz", () => {
  it("Should return a give number as a string", () => {
    assert.strictEqual(fizzbuzz(1), '1')
  })
  it("debería devolver FIZZ si el número es divisible por 3", () => {
    assert.strictEqual(fizzbuzz(6), 'FIZZ')
    assert.strictEqual(fizzbuzz(9), 'FIZZ')
    assert.strictEqual(fizzbuzz(12), 'FIZZ')
  })
  it("debería devolver BUZZ si el número es divisible por 5", () => {
    assert.strictEqual(fizzbuzz(5), 'BUZZ')
    assert.strictEqual(fizzbuzz(10), 'BUZZ')
  })
  it("debería devolver FIZZBUZZ si el número es divisible por 3 y 5", () => {
    assert.strictEqual(fizzbuzz(15), 'FIZZBUZZ')
  })
})
