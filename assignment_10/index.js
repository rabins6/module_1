const providedNumber = parseInt(
  prompt("Provide a number to check if it is prime number.")
)
let numIsPrime = true

function checkPrime() {
  for (let i = 2; i < providedNumber; i++) {
    if (providedNumber % i === 0) {
      numIsPrime = false
      break
    }
  }
  if (numIsPrime) {
    document.getElementById(
      "prime"
    ).innerHTML = `${providedNumber} is a prime number`
  } else {
    document.getElementById(
      "prime"
    ).innerHTML = `${providedNumber} is not a prime number`
  }
}

checkPrime()
