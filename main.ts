radio.onReceivedNumber(function (receivedNumber) {
    t0 = Math.round(input.runningTime() * 1000) / 1000
    while (input.lightLevel() > 180 && t1 == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    t1 = Math.round(input.runningTime() * 1000) / 1000
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    Temps = (t1 - t0) / 1000
    for (let index = 0; index < 2; index++) {
        basic.showString("" + Temps + "s")
    }
    radio.setGroup(20)
    radio.sendValue("Ligne 1", Temps)
})
let Temps = 0
let t1 = 0
let t0 = 0
radio.setGroup(1)
t0 = 0
t1 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
pins.digitalWritePin(DigitalPin.P0, 1)
