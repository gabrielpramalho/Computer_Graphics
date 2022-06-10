import cv2 as cv
import matplotlib.pyplot as plt

img = cv.imread('../Photos/park.jpg')
cv.imshow('Park', img)


# plt.imshow(img)
# plt.show()


#BGR

gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
cv.imshow('Gray', gray)

# BGR to HSV

hsv = cv.cvtColor(img, cv.COLOR_BGR2HSV)
cv.imshow('Hsv', hsv)

# BGR to LAB

lab = cv.cvtColor(img, cv.COLOR_BGR2LAB)
cv.imshow('LAB', lab)

# BGR to RGB
rgb = cv.cvtColor(img, cv.COLOR_BGR2RGB)
cv.imshow('RBG', rgb)

plt.imshow(rgb)
plt.show()



cv.waitKey(0)