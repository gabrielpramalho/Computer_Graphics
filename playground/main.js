var image = document.getElementById("image");
var canvas = document.getElementById('image-canvas');
var context;

let load = function(){
    context = canvas.getContext('2d');
    drawImage(canvas, context, image);
}

let drawImage = function(cv, ctx, img) {
    cv.width = img.width;
    cv.height = img.height;
    ctx.drawImage(img, 0, 0);
}

let greyScale = function() {
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    var data = imageData.data;
    for (var i = 0; i < data.length; i+=4) {
        var red = data[i];
        var green = data[i+1];
        var blue = data[i+2];
        var gray = (red + green + blue) / 3; 
        data[i] = data[i+1] = data[i+2] = gray;
    }
    context.putImageData(imageData, 0, 0);
}

document.getElementById('btnLoad').addEventListener('click', load);
document.getElementById('btnGreyScale').addEventListener('click', greyScale);
