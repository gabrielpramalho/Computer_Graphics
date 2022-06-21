import cv2 as cv
import pytesseract as tess

tess.pytesseract.tesseract_cmd = 'C:\\Program Files\\Tesseract-OCR\\tesseract.exe'

img = cv.imread('Images/test.jpg')
gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)


