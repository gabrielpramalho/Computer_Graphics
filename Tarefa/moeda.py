
import cv2 as cv
import numpy as np
import imutils


img = cv.imread('Imagem/coins3.jpg')
cv.imshow('Moedas', img)

gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
cv.imshow('Moedas', gray)

blur = cv.GaussianBlur(gray, (5,5), cv.BORDER_DEFAULT)
cv.imshow('Blur', blur)

ret, thresh = cv.threshold(gray, 200, 255, cv.THRESH_BINARY_INV)
cv.imshow('Binary', thresh)

kernel = np.ones((3,3),np.uint8)
dilation = cv.dilate(thresh,kernel,iterations = 1)
cv.imshow('Dilation', dilation)

# closingImg = cv.morphologyEx(dilation, cv.MORPH_CLOSE, kernel)
# cv.imshow('Close', closingImg)

cnts = cv.findContours(dilation.copy(), cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)

cnts = imutils.grab_contours(cnts)
objects = str(len(cnts))
print(objects)

cv.waitKey(0)