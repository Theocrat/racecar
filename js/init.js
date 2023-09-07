// Contains the initialization function, and all its dependencies

function setGlobals() {
  display = document.querySelector("#gameArea")
  gtime   = document.querySelector("#gtime")
  gspeed  = document.querySelector("#gspeed")
  lives   = document.querySelector("#lives")

  step()
  secondCounter()
}