serial.redirectToUSB()
basic.forever(function () {
    serial.writeValue("lLDR_R:", MiniCar.PH2())
    serial.writeValue("lLDR_L:", MiniCar.PH1())
    basic.pause(1000)
})
