var imageNumber = 1;

var timer = setInterval(switchImage, 3500);

function switchImage(){
    imageNumber +=1;
    if (imageNumber > 3) {
        imageNumber = 1;
    }
    document.getElementById("fall-art").src = "./slideshow/" + imageNumber + ".jpg";
}
