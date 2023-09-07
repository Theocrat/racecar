// Defines variables which will describe the game state

// Dimensions of each 'pixel' in the game display, and the number of
// rows of columns of such 'pixels'
const PIXEL_DIMS = 40
const NUM_ROWS = 720 / PIXEL_DIMS
const NUM_COLS = 480 / PIXEL_DIMS

// Pixel Map object and the methods for accessing it easily
const PixelMap = [...Array(NUM_ROWS * NUM_COLS).keys()]
const getPixel = (r, c) => PixelMap[r * NUM_COLS + c]
const setPixel = (r, c, val) => { PixelMap[r * NUM_COLS + c] = val }

// Location of the center pixel column of the player's car - vary from
// 1, which is the furthest to the left, to (NUM_COLS - 1) which is the
// furthest to the right; Initialized at the center, offset towards the
// left if there are even number of columns
var myPos = Math.floor(NUM_COLS / 2)

// Objects representing the 'enemy' cars
const Enemies = {}
var numEnemies = 0

// Constructor for new enemy cars, a quick wrapper for making new enemies
class Enemy {
  constructor(col) {
    this.row = 0
    this.col = col
    this.id  = numEnemies

    Enemies[this.id] = this
    numEnemies += 1
  }

  step() {
    if (this.row > NUM_ROWS) {
      delete Enemies[this.id]
    }

    this.row += 1
  }

  draw() {
    return drawCar(this.col, this.row, "red")
  }
}

// Game State variables
var gameSpeed = 2 // Number of steps per second
var gameTime  = 0 // Game time in seconds
var gamePause = false
var livesRemaining = 3

// Essential global pointers to HTML page elements, which are quasi-constants:
// They should be declared here, but they need to be initialized to Null since
// the elements do not yet exist when this script runs.
// They will be set by the `init` function after the page loads
var display = null
var gtime   = null
var gspeed  = null
var lives   = null