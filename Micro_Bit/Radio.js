input.onButtonPressed(Button.A, function () {
    radio.sendString("RADIO TEST")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(67)
