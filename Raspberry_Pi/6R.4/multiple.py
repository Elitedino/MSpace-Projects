from gpiozero import PWMLED
from time import sleep

led = PWMLED(17)

led.on()