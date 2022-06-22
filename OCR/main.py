import cv2 as cv
import pytesseract as tess

tess.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

img = cv.imread('Images/teste2.png')
# cv.imshow('IMG', img)

gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
# cv.imshow('IMG', gray)

text = tess.image_to_string(img, lang='por')

print(text)
print(tess.image_to_boxes(img))


cv.waitKey(0)


