basic.showString("Hello!I am Ayaan")
basic.clearScreen()
basic.showLeds(`
    . # # # .
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . . .
    # . . . .
    `)
basic.showLeds(`
    # # # # .
    # . . # .
    # . . # .
    # . . # .
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    # . . # .
    # . . # .
    # . . # .
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    # . . . #
    # . . . #
    # . . . #
    # . . . #
    `)
basic.forever(function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 1000), music.PlaybackMode.UntilDone)
})
