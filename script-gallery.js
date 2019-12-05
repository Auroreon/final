var imageNumber = 1;

var timer = setInterval(switchImage, 2500);

function switchImage(){
    imageNumber +=1;
    if (imageNumber > 15) {
        imageNumber = 1;
    }
    document.getElementById("art-gallery").src = "./gallery/" + imageNumber + ".jpg";
}
