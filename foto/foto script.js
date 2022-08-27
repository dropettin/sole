var container = document.getElementById("parallax-container"),
waveSrc = [],
waves = [],
imgLoc = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/",
j = 0;

for (var i = 0; i < 10; i++) {
	waveSrc[i] = imgLoc+"wave"+(i+1)+".jpg";
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function preloadImage(filename){
    var img=new Image();
    img.onload = function(){ 
	    img.xPlane = getRandomInRange(-500, screenWidth - 500);
	    img.yPlane = getRandomInRange(500, 1000);
	    img.zPlane = getRandomInRange(300,2000);
	    img.style = "transform: translate3d("+img.xPlane+"px, "+img.yPlane+"px, -" + img.zPlane +"px)";
       container.appendChild(img);
    };
    imgLoc = "";
    img.src= imgLoc + filename;
    img.alt = "";
    waves[j] = img;
    j++;
}

function loadImages(){
	for (var i = 0; i < waveSrc.length; ++i) {
		var filename = waveSrc[i];
		preloadImage(filename);
	}
}

function moveImages(){
	waves.forEach(function(image) {
			image.yPlane = image.yPlane - 2;
			image.style.cssText = "transform: translate3d("+image.xPlane+"px, "+image.yPlane+"px,  -"+ image.zPlane +"px); z-index: "+image.zIndex;
		});
	window.requestAnimationFrame(moveImages);
}

var perspImages = container.getElementsByTagName("img"),
screenWidth = window.screen.width,
screenHeight = window.screen.height;

loadImages();
window.requestAnimationFrame(moveImages);