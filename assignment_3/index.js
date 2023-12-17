const integer_1 = parseInt(prompt("type 1st number..."))
const integer_2 = parseInt(prompt("type 2nd number..."))
const integer_3 = parseInt(prompt("type 3rd number..."))

const sum_of_integers = integer_1 + integer_2 + integer_3
const product_of_integers = integer_1 * integer_2 * integer_3
const average_of_integers = sum_of_integers / 3

document.getElementById("sum").innerHTML = `Sum - ${sum_of_integers}`
document.getElementById(
  "product"
).innerHTML = `Product - ${product_of_integers}`
document.getElementById(
  "average"
).innerHTML = `Average - ${average_of_integers}`
