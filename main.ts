input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < temps; index++) {
        minute += -1
        basic.showString("" + (minute))
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    temps = 60
    minute = 60
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    minute = 60
    temps = 60
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
})
let temps = 0
let minute = 0
minute = 60
temps = 60
basic.clearScreen()
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    # # # # #
    # . . . #
    `)
basic.forever(function () {
	
})
