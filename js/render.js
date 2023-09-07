function drawCarBlock(x, y, color="blue") {
    x *= PIXEL_DIMS
    y *= PIXEL_DIMS
    let outerBlock = `
        <rect x="${x}" y="${y}"
              width="${PIXEL_DIMS}"
              height="${PIXEL_DIMS}"
              class="solid-block-${color}"
        />`
    
    let hollowBlock = `
        <rect x="${x + 4}" y="${y + 4}"
              width="${PIXEL_DIMS  - 8}"
              height="${PIXEL_DIMS - 8}"
              class="empty-block"
        />`

    let innerBlock = `
        <rect x="${x + 8}" y="${y + 8}"
              width="${PIXEL_DIMS  - 16}"
              height="${PIXEL_DIMS - 16}"
              class="solid-block-${color}"
        />`

    return outerBlock + hollowBlock + innerBlock
}


function drawCar(x, y, color="blue") {
    let blockByBlock = [
        drawCarBlock(x - 1, y, color),
        drawCarBlock(x, y, color),
        drawCarBlock(x + 1, y, color),
        drawCarBlock(x, y - 1, color),

        drawCarBlock(x - 1, y - 2, color),
        drawCarBlock(x, y - 2, color),
        drawCarBlock(x + 1, y - 2, color),
        drawCarBlock(x, y - 3, color)
    ]

    return blockByBlock.join("\n")
}