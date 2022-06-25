var image = document.getElementById("image");
var canvas = document.getElementById('image-canvas');
var context;


let load = function (){
    
    context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
}

let drawImage = function(cv, ctx, img, invertAxios=false) {
    let width = img.width;
    let height = img.height;

    if(invertAxios){
        width = img.height;
        height = img.width
    }
    
    cv.width = width;
    cv.height = height;
    ctx.drawImage(img, 0, 0);
}

let greyScale = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            var pixel = img.getPixel(i,j);
            var gray = (pixel.red + pixel.green + pixel.blue) / 3; 
            img.setPixel(i, j, new RGBColor(gray, gray, gray));
        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let thresholding = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            var pixel = img.getPixel(i,j).green;

            if(pixel > 100){
                img.setPixel(i,j, new RGBColor(255,255,255));
            }else{
                img.setPixel(i,j, new RGBColor(0,0,0));
            }
            
        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let mean = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            var pixel = Array();
            pixel.push(img.getPixel(i-1,j-1).red);
            pixel.push(img.getPixel(i,j-1).red);
            pixel.push(img.getPixel(i+1,j-1).red);
            pixel.push(img.getPixel(i-1,j).red);
            pixel.push(img.getPixel(i,j).red);
            pixel.push(img.getPixel(i+1,j).red);
            pixel.push(img.getPixel(i-1,j+1).red);
            pixel.push(img.getPixel(i,j+1).red);
            pixel.push(img.getPixel(i+1,j+1).red);
            var gray = pixel.reduce((a, b) => a + b, 0) / 9;
    
            img.setPixel(i, j, new RGBColor(gray, gray, gray));
        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let median = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            var pixel = Array();
            pixel.push(img.getPixel(i-1,j-1).red);
            pixel.push(img.getPixel(i,j-1).red);
            pixel.push(img.getPixel(i+1,j-1).red);
            pixel.push(img.getPixel(i-1,j).red);
            pixel.push(img.getPixel(i,j).red);
            pixel.push(img.getPixel(i+1,j).red);
            pixel.push(img.getPixel(i-1,j+1).red);
            pixel.push(img.getPixel(i,j+1).red);
            pixel.push(img.getPixel(i+1,j+1).red);
            var gray = pixel.sort()[4];
    
            img.setPixel(i, j, new RGBColor(gray, gray, gray));
        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let gaussian = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            var pixel = Array();
            pixel.push(img.getPixel(i-1,j-1).red * 1);
            pixel.push(img.getPixel(i,j-1).red * 2);
            pixel.push(img.getPixel(i+1,j-1).red * 1);
            pixel.push(img.getPixel(i-1,j).red * 2);
            pixel.push(img.getPixel(i,j).red * 4);
            pixel.push(img.getPixel(i+1,j).red * 2);
            pixel.push(img.getPixel(i-1,j+1).red * 1);
            pixel.push(img.getPixel(i,j+1).red * 2);
            pixel.push(img.getPixel(i+1,j+1).red * 1);
            var gray = pixel.reduce((a, b) => a + b, 0) / 16;
    
            img.setPixel(i, j, new RGBColor(gray, gray, gray));
        }
    }
    context.putImageData(img.imageData, 0, 0);
}


let red = function(){
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);

    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {

            var gray = img.getPixel(i,j).red;
    
            img.setPixel(i, j, new RGBColor(gray, gray, gray));
        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let green = function(){
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);

    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            
            var gray = img.getPixel(i,j).green;
    
            img.setPixel(i, j, new RGBColor(gray, gray, gray));
        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let blue = function(){
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);

    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            var pixel = Array();

            var gray = img.getPixel(i,j).blue;
    
            img.setPixel(i, j, new RGBColor(gray, gray, gray));
        }
    }
    context.putImageData(img.imageData, 0, 0);
}


let brightness = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            
    
            img.setPixel(i, j, new RGBColor(img.getPixel(i,j).red+5, img.getPixel(i,j).green+5, img.getPixel(i,j).blue+5));
        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let contrast = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);

    let redAux=0
    let greenAux=0
    let blueAux=0

    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            redAux += img.getPixel(i,j).red;
            greenAux += img.getPixel(i,j).green;
            blueAux += img.getPixel(i,j).blue;
        }
    }

    redAux = redAux % 255 * 0.02;
    greenAux = greenAux % 255 * 0.02;
    blueAux = blueAux % 255 * 0.02;

    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            img.setPixel(i, j, new RGBColor(img.getPixel(i,j).red*redAux, img.getPixel(i,j).green*greenAux, img.getPixel(i,j).blue*blueAux));
        }
    }

    context.putImageData(img.imageData, 0, 0);
}

let flipHorizontal = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 0; i < img.width/2; i++) {
        for (var j = 0; j < img.height; j++) {
            
            var len = img.width-1
            var aux = img.getPixel(i,j);

            img.setPixel(i,j, new RGBColor(img.getPixel(len-i, j).red,img.getPixel(len-i, j).green,img.getPixel(len-i, j).blue));
        
            img.setPixel(len-i, j, new RGBColor(aux.red, aux.green, aux.blue));

        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let flipVertical = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height/2; j++) {
            
            var len = img.height-1
            var aux = img.getPixel(i,j);

            img.setPixel(i,j, new RGBColor(img.getPixel(i, len-j).red,img.getPixel(i, len-j).green,img.getPixel(i, len-j).blue));
            
            img.setPixel(i, len-j, new RGBColor(aux.red, aux.green, aux.blue));

        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let flip90 = function() {
    drawImage(canvas, context, image);
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let imageDataFlip = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    let imgFlip = new MatrixImage(imageDataFlip);
    
    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            const pixel = img.getPixel(img.width-j,i);
            imgFlip.setPixel(i, j, pixel)
        }
    }

    context.putImageData(imgFlip.imageData, 0, 0);
}

class RGBColor {
    constructor(r, g, b) {
      this.red = r;
      this.green = g; 
      this.blue = b;
    }
}

class MatrixImage {
    constructor(imageData) {
      this.imageData = imageData;
      this.height = imageData.height; 
      this.width = imageData.width;
    }

    getPixel(x, y) {
        let position = ((y * (this.width * 4)) + (x * 4));

        return new RGBColor(
             this.imageData.data[position],   //red
             this.imageData.data[position+1], //green
             this.imageData.data[position+2], //blue
        );
    }

    setPixel(x, y, color) {
        let position = ((y * (this.width * 4)) + (x * 4));
        this.imageData.data[position] = color.red;
        this.imageData.data[position+1] = color.green;
        this.imageData.data[position+2] = color.blue;
    }
}

window.onload = load();
document.getElementById('btnLoad').addEventListener('click', load);
document.getElementById('btnGreyScale').addEventListener('click', greyScale);
document.getElementById('btnThresholding').addEventListener('click', thresholding);
document.getElementById('btnMean').addEventListener('click', mean);
document.getElementById('btnMedian').addEventListener('click', median);
document.getElementById('btnGaussian').addEventListener('click', gaussian);
document.getElementById('btnRed').addEventListener('click', red);
document.getElementById('btnGreen').addEventListener('click', green);
document.getElementById('btnGreen').addEventListener('click', green);
document.getElementById('btnBlue').addEventListener('click', blue);
document.getElementById('btnBrightness').addEventListener('click', brightness);
document.getElementById('btnContrast').addEventListener('click', contrast);
document.getElementById('btnFlipHorizontal').addEventListener('click', flipHorizontal);
document.getElementById('btnFlipVertical').addEventListener('click', flipVertical);
document.getElementById('btnFlip90').addEventListener('click', flip90);

