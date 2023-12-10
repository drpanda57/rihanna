input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        `)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . . # # .
        . # # # .
        . # # . .
        . . . . .
        `)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
function ComputerSign () {
	
}
basic.forever(function () {
	
})
