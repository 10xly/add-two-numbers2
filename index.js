const $Number = require("@stdlib/number-ctor")
const baseAdd = require("examplebyraji")

module.exports = function add_two_numbers(a, b) {
  return baseAdd($Number(a), $Number(b))
}
