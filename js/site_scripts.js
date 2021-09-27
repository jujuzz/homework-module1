var attr = ["partner bus tour","partner cabin rental","partner camping adventure","partner college tours","part bike rental","partner tour group"];
var fileNames = [];
var photos = [];
var openList = "<li class='partner'>"; 
var closeList = "</li>";
var image;
var imageList = [];

for (var i = 0; i < 6; i++){
    fileNames.push("partner" + (i + 1));
    photos.push("<img src='images/partners/" + fileNames[i] + ".png' alt='" + attr[i] + "'>");
    image = openList + photos[i] + closeList;
    imageList.push(image);  
}
document.getElementById("partners").innerHTML = imageList.join('');