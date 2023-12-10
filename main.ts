let Schere = 0
let Papier = 0
let Stein = 0
let Computer = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        `)
    Schere = 1
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . . # # .
        . # # # .
        . # # . .
        . . . . .
        `)
    Papier = 1
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    Stein = 1
})
function ComputerSign () {
    Computer = randint(1, 3)
}
basic.forever(function () {
	
})
