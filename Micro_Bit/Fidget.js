// heads or tails thing
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Ghost)
    } else {
        basic.showIcon(IconNames.Square)
    }
    SetSecret1 = 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Math.randomRange(1, 6))
    SetSecret2 = 1
})
input.onPinPressed(TouchPin.P1, function () {
    SetSecret3 = 1
    basic.showString("-- --- .-. ... .")
})
let SetSecret3 = 0
let SetSecret2 = 0
let SetSecret1 = 0
SetSecret1 = 0
SetSecret2 = 0
SetSecret3 = 0
radio.setGroup(162)
basic.showIcon(IconNames.Chessboard)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    if (SetSecret1 == 1) {
        if (SetSecret2 == 1) {
            if (SetSecret3 == 1) {
                basic.clearScreen()
                basic.showString("Secret Found!")
            }
        }
    }
})
