input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showIcon(IconNames.Meh)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("aiueo")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Diamond)
    basic.pause(2000)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showIcon(IconNames.Rollerskate)
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(1000)
basic.showIcon(IconNames.SmallDiamond)
basic.showString("Hello!")
