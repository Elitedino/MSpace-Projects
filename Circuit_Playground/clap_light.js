input.onLoudSound(function () {
    light.setBrightness(255)
    light.setAll(0xffffff)
    pause(2000)
    light.setAll(0x000000)
})
