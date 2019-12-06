"""Simple test for using adafruit_motorkit with a stepper motor"""
from adafruit_motorkit import MotorKit

kit = MotorKit()

print("spinning stepper motor")
while True:
    kit.stepper1.onestep()
