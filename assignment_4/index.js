const studentName = prompt("Please type your name")

const drawnClass = Math.floor(Math.random() * 3)

let hogwartsClass

function sortHogwartsClass() {
  switch (drawnClass) {
    case 0:
      hogwartsClass = "Gryffindor"
      break
    case 1:
      hogwartsClass = "Slytherin"
      break
    case 2:
      hogwartsClass = "Hufflepuff"
      break
    case 3:
      hogwartsClass = "Ravenclaw"
      break
    default:
      return
  }
}

sortHogwartsClass()

document.getElementById(
  "hogwarts"
).innerHTML = `${studentName}, you are ${hogwartsClass}.`
