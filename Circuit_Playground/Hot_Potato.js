input.buttonA.onEvent(ButtonEvent.Click, function () {
    delay = 500 + Math.randomRange(0, 1501)
    while (delay > 0) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        light.showAnimation(light.rainbowAnimation, delay)
        delay += -50
    }
    music.wawawawaa.play()
    light.showAnimation(light.theaterChaseAnimation, 500)
})
let delay = 0
music.setVolume(100)
