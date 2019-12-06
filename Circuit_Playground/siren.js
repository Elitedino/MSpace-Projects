input.onGesture(Gesture.Shake, function () {
    music.siren.play()
    for (let i = 0; i < 4; i++) {
        light.showRing(
        `yellow white yellow white yellow green blue green blue green`
        )
        light.showRing(
        `green purple green purple green green orange green orange green`
        )
    }
    light.clear()
})
