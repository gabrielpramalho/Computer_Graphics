import cv2 as cv
import numpy as np
import imutils

img = cv.imread('Imagem/obj.jpg')
cv.imshow('Img', img)

blur = cv.GaussianBlur(img, (3,3), cv.BORDER_DEFAULT)
cv.imshow('Blur', blur)

gray = cv.cvtColor(blur, cv.COLOR_BGR2GRAY)
cv.imshow('Gray', gray)

ret, thresh = cv.threshold(gray, 90, 255, cv.THRESH_BINARY_INV)
cv.imshow('Binary', thresh)

kernel = np.ones((7,7),np.uint8)
dilation = cv.dilate(thresh,kernel,iterations = 1)
cv.imshow('Dilation', dilation)

cnts = cv.findContours(dilation.copy(), cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)
cnts = imutils.grab_contours(cnts)
objects = str(len(cnts))
print(objects)





cv.waitKey(0)