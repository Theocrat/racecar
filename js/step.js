function renderAll() {
    display.innerHTML = drawCar(myPos, NUM_ROWS - 1)

    for (key in Enemies) {
        let enemy = Enemies[key]
        display.innerHTML += enemy.draw()
    };
}

function reduceLives() {
    display.style.backgroundColor = "#fff"

    if (livesRemaining <= 0) {
        alert(`Game Over! You survived ${gameTime} seconds.`)
    }

    else {
        livesRemaining -= 1
        for (key in Enemies) {
            delete Enemies[key]
        }
        gamePause = false
        lives.innerHTML = [...Array(livesRemaining).keys()].map(_ => "🚗 ")
    }
}

function showBigBadaboom() {
    display.style.backgroundColor = "#fcd"
    gamePause = true
    setTimeout(reduceLives, 500)
}

function collidedWith(enemy) {
    if (gamePause) {return false}

    if (enemy.row > NUM_ROWS - 7 && enemy.row < NUM_ROWS + 1) {
        let not_left  = enemy.col + 1 >= myPos - 1
        let not_right = enemy.col - 1 <= myPos + 1

        if (not_left && not_right) {
            return true
        }
    }

    return false
}

function step() {
    setTimeout(step, 1000)
    
    for (key in Enemies) {
        let enemy = Enemies[key]
        enemy.step()
        if (collidedWith(enemy)) {
            showBigBadaboom()
        }
    }

    renderAll()
}