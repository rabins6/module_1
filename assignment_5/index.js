const year = parseInt(prompt("Please type a year"))

if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
  document.getElementById("leapyear").innerHTML = `${year} is a leap year.`
} else {
  document.getElementById("leapyear").innerHTML = `${year} is not a leap year.`
}
