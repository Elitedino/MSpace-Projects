forever(function () {
    light.setAll(0x0000ff)
    for (let index = 0; index <= 255; index++) {
        light.setBrightness(index)
        pause(20)
        for (let index2 = 0; index2 <= 255; index2++) {
            light.setBrightness(0 - index2)
            pause(20)
        }
    }
})
