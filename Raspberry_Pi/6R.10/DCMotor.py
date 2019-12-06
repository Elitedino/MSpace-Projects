from time import sleep
from adafruit_motorkit import MotorKit

kit = MotorKit()

kit.motor1.throttle = 1.0
sleep(5)
kit.motor1.throttle = 0
