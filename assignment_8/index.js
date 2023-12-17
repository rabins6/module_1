const start_year = parseInt(prompt("Please type the start year:"))
const end_year = parseInt(prompt("Please type the end year:"))

if (start_year >= end_year) {
  document.getElementById(
    "info"
  ).innerHTML = `The end year: ${end_year} must be greater than start year: ${start_year}`
} else {
  const ul = document.getElementById("leapyears")
  for (let i = start_year; i <= end_year; i++) {
    if (i % 4 === 0 || (i % 100 === 0 && i % 400 === 0)) {
      let li = document.createElement("li")
      li.appendChild(document.createTextNode(i))
      ul.appendChild(li)
    }
  }
}
