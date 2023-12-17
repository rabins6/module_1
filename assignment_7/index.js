const noOfDiceRolls = parseInt(
  prompt("How many times do you want to roll the dice?")
)

function sumOfDiceRolled() {
  let sumOfDiceRolls = 0

  for (let i = 1; i <= noOfDiceRolls; i++) {
    let rollDice = Math.floor(Math.random() * 6) + 1
    sumOfDiceRolls += rollDice
  }

  document.getElementById(
    "sumofdicerolls"
  ).innerHTML = `The dice was rolled ${noOfDiceRolls} times and the sum is: ${sumOfDiceRolls}`
}

sumOfDiceRolled()
