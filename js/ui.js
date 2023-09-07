var alternator = false

document.addEventListener("keydown", function (event) {
    console.log("Received keypress " + alternator)
    alternator = !alternator

    if (event.code == "KeyA" && myPos > 1) {
        myPos -= 1
    }

    if (event.code == "KeyD" && myPos < NUM_COLS - 2) {
        myPos += 1
    }

    renderAll()
})

function secondCounter() {
    setTimeout(secondCounter, 1000)
    if (gamePause) { return }
    
    gameTime += 1
    if (gtime != null) {
        gtime.innerHTML = gameTime + " seconds"
    }
}