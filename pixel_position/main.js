var image = document.getElementById("image");
var canvas = document.getElementById('image-canvas');
var context;

let load = function (){
    
    context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
}

let drawImage = function(cv, ctx, img) {
    cv.width = img.width;
    cv.height = img.height;
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

let red = function(){
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
            pixel.push(img.getPixel(i-1,j-1).red);
            pixel.push(img.getPixel(i,j-1).red);
            pixel.push(img.getPixel(i+1,j-1).red);
            pixel.push(img.getPixel(i-1,j).red);
            pixel.push(img.getPixel(i,j).red);
            pixel.push(img.getPixel(i+1,j).red);
            pixel.push(img.getPixel(i-1,j+1).red);
            pixel.push(img.getPixel(i,j+1).red);
            pixel.push(img.getPixel(i+1,j+1).red);
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
    for (var i = 0; i < img.width; i++) {
        for (var j = 0; j < img.height; j++) {
            
    
            img.setPixel(i, j, new RGBColor(img.getPixel(i,j).red-5, img.getPixel(i,j).green-5, img.getPixel(i,j).blue-5));
        }
    }
    context.putImageData(img.imageData, 0, 0);
}

let flipHorizontal = function() {
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let img = new MatrixImage(imageData);
    for (var i = 0; i < img.height; i++) {
        for (var j = 0; j < img.width; j++) {
            
            var len = img.width-1


            var auxRed = img.getPixel(j,i).red
            var auxGreen = img.getPixel(j,i).green
            var auxBlue = img.getPixel(j,i).blue

            img.setPixel(j, i, new RGBColor(img.getPixel(j,len-i).red, img.getPixel(j,len-i).green, img.getPixel(j,len-i).blue));
            img.setPixel(j, len-i, new RGBColor(auxRed, auxGreen, auxBlue));



        }
    }
    context.putImageData(img.imageData, 0, 0);
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

document.getElementById('btnLoad').addEventListener('click', load);
document.getElementById('btnGreyScale').addEventListener('click', greyScale);
document.getElementById('btnMean').addEventListener('click', mean);
document.getElementById('btnMedian').addEventListener('click', median);
document.getElementById('btnRed').addEventListener('click', red);
document.getElementById('btnGreen').addEventListener('click', green);
document.getElementById('btnGreen').addEventListener('click', green);
document.getElementById('btnBlue').addEventListener('click', blue);
document.getElementById('btnBrightness').addEventListener('click', brightness);
document.getElementById('btnContrast').addEventListener('click', contrast);
document.getElementById('btnFlipHorizontal').addEventListener('click', flipHorizontal);

