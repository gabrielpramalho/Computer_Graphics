import cv2 as cv
from cv2 import resize

img = cv.imread('../Photos/park.jpg')
cv.imshow('Park', img)

# Converting to grayscale

gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
cv.imshow('Gray', gray)

# Blur

blur = cv.GaussianBlur(gray, (3,3), cv.BORDER_DEFAULT)
cv.imshow('Blur', blur)

# Edge Cascade

canny = cv.Canny(blur, 125, 175)
cv.imshow('Canny', canny)

# Dilating the image

dilated = cv.dilate(canny, (3,3), iterations=1 )
cv.imshow('Dilated', dilated)

# Eroding

eroding = cv.erode(dilated, (3,3), iterations=1)
cv.imshow('Eroding', eroding)

# Resize

resized = cv.resize(img, (500,500), interpolation=cv.INTER_CUBIC)
cv.imshow('Resized', resized)

# Cropping

cropped = img[50:200, 200:400]
cv.imshow('Cropped', cropped)



cv.waitKey(0)