$(function() {
    $('input[type="file"]').on('change',function (e){
        var file = e.currentTarget.files[0];
        render("img1", file, 0.75, 0.75);
        render("img2", file, 0.75, 0.5);
        render("img3", file, 0.5, 0.75);
        render("img4", file, 0.5, 0.5);
    });

    function render(targetId, file, ratio, quality) {
        var type = file.type;
             
        var dataUrl = URL.createObjectURL(file);
     
        var image = new Image();
        image.onload = function(){
            var width = image.width;
            var height = image.height;
     
            var canvasWidth = Math.floor(width * ratio);
            var canvasHeight = Math.floor(height * ratio);
            var $canvas = $('<canvas></canvas>');
            var canvas = $canvas[0];
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
             
            var ctx = canvas.getContext('2d');
            ctx.drawImage( image , 0, 0, width, height, 0, 0, canvasWidth, canvasHeight);
            var base64 = canvas.toDataURL(type, quality);
            $("#" + targetId).attr("src", base64);
        };
        image.src = dataUrl;
    }
});
