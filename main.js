//link "https://teachablemachine.withgoogle.com/models/SNQSA2IfO/"

function startClassification() {
navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/SNQSA2IfO/model.json',modelReady);
}

function modelReady() {
classifier.classify(gotResults);
}

function gotResults(error,results){
if  (error) {
console.log("error occured");
console.log(error);
}else{
console.log("gotResults");
console.log(results);
}

//rgb(123,45,64)

var random_r = Math.floor(Math.random()*255)+1;
var random_g = Math.floor(Math.random()*255)+1;
var random_b = Math.floor(Math.random()*255)+1;

document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";

document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";

if (results[0].label == "bell"){

document.getElementById("alien2").src = "aliens-02.gif";
document.getElementById("alien1").src = "aliens-01.png";
document.getElementById("alien3").src = "aliens-03.png";
document.getElementById("alien4").src = "aliens-04.png";

}else if (results[0].label == "clap"){

document.getElementById("alien3").src = "aliens-03.gif";
document.getElementById("alien1").src = "aliens-01.png";
document.getElementById("alien2").src = "aliens-02.png";
document.getElementById("alien4").src = "aliens-04.png";

}else if(results[0].label == "dog bark"){

document.getElementById("alien4").src = "aliens-04.gif";
document.getElementById("alien1").src = "aliens-01.png";
document.getElementById("alien3").src = "aliens-03.png";
document.getElementById("alien2").src = "aliens-02.png";

}else if (results[0].label == "Background Noise"){

document.getElementById("alien1").src = "aliens-01.gif";
document.getElementById("alien2").src = "aliens-02.png";
document.getElementById("alien3").src = "aliens-03.png";
document.getElementById("alien4").src = "aliens-04.png";

}

}
