import cv2 as cv
import numpy as np


img = cv.imread('../Photos/park.jpg')

cv.imshow('Park', img)

# Translation

def tranlate(img, x, y):
    transMat = np.float32([[1,0,x],[0,1,y]])
    dimensions = (img.shape[1], img.shape[0])
    return cv.warpAffine(img, transMat, dimensions)

# -x --> Left
# -y --> Up
# x --> Right
# y --> Down

tranlated = tranlate(img, -100, 0)

cv.imshow('Translated', tranlated)

# Rotation

def rotate(img, angle, rotPoint=None):
    (height, width) = img.shape[:2]

    if rotPoint is None:
        rotPoint = (width//2, height//2)
        
    rotMat = cv.getRotationMatrix2D(rotPoint, angle, 1.0)
    dimensions = (width, height)

    return cv.warpAffine(img, rotMat, dimensions)

rotated = rotate(img, -90)
cv.imshow('Rotated', rotated)

# Flipping

# 0 Vertical
# 1 Horizontal
# -1 Horizontal e vertical

flip = cv.flip(img, -1)
cv.imshow('Flip', flip)

# Cropping 

cropped = img[200:400, 300:400]
cv.imshow('Crop', cropped)





cv.waitKey(0)