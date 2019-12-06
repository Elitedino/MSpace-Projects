import RPi.GPIO as GPIO
from time import sleep

GPIO.setmode(GPIO.BCM)
GPIO.setup(25, GPIO.IN)
GPIO.setup(24, GPIO.OUT)

try:
    while True:
        if GPIO.input(25):
            print("port 25 = 1, LED ON")
            GPIO.output(24, 1)
        else:
            print("port 25 = 0, LED OFF")
            GPIO.output(24, 0)
        sleep(0.1)
        
finally:
    GPIO.cleanup()