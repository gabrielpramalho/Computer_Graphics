import cv2 as cv

img = cv.imread('../Photos/cats.jpg')
cv.imshow('Cats', img)


# Average Blur
average = cv.blur(img, (3,3))
cv.imshow('Average', average)

# Gaussian Blur

gauss = cv.GaussianBlur(img, (3,3), 0)
cv.imshow('Gaussian', gauss)

# Median Blur

meduian = cv.medianBlur(img, 3)
cv.imshow('Median', meduian)

# Bilateral Blur

bilateral = cv.bilateralFilter(img, 5, 15, 15)
cv.imshow('Bilateral', bilateral)

cv.waitKey(0)