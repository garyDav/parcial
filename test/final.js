const assert = require("assert")

const {
  fizzbuzz
} = require("../src/final")

describe.only("Kata Fizz Buzz", () => {
  it("Retornar un numero", () => {
    assert.strictEqual(fizzbuzz(1), 1)
  })
})
