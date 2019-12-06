input.buttonA.onEvent(ButtonEvent.Click, function () {
    light.setAll(0xff0000)
    for (let i = 0; i < 100; i++) {
        light.setBrightness(intensity)
        intensity += 1
        pause(50)
    }
    music.powerUp.play()
    light.setAll(0x00ff00)
    for (let i = 0; i < 100; i++) {
        light.setBrightness(intensity)
        intensity += -1
        pause(50)
    }
})
let intensity = 0
light.setAll(0x007fff)
pause(500)
light.clear()
intensity = 0
