const calculateSqrt = confirm("Should I calculate the square root?")

if (!calculateSqrt) {
  document.getElementById("squareroot").innerHTML =
    "The square root is not calculated"
} else {
  const providedNumber = parseFloat(prompt("calculte the square root of:"))
  if (providedNumber < 0) {
    document.getElementById("squareroot").innerHTML =
      "The square root of a negative number is not defined"
  } else {
    const calculatedNumber = Math.sqrt(providedNumber)

    document.getElementById(
      "squareroot"
    ).innerHTML = `The square root of ${providedNumber} is: ${calculatedNumber}`
  }
}
