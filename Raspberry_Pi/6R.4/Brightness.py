from gpiozero import PWMLED
from time import sleep

led = PWMLED(17)

while True:
    led.value = 0  # off
    sleep(0.05)
    led.value = 1  # half brightness
    sleep(0.05)
    