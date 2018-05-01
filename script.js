
var img = document.getElementById("hint-div");
var block = document.getElementById("hint-block");
var helloBlock = document.getElementById("hello-text");
var mailBlock = document.getElementById("mail-text");
var mailText = document.getElementById("mail-text-p");

function showHint(){
	block.style.display = "block";
	img.style.display = "block";
}

function hide(){
	block.style.display = "none";
	img.style.display = "none";
}

function showMail(e){
	helloBlock.style.display = "none";
	mailBlock.style.display = "block";
	mailText.innerHTML = readTextFile(e + ".txt");
}

function closeMail(){
	helloBlock.style.display = "block";
	mailBlock.style.display = "none";
}

function readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "https://qargwic.github.io/mails/" + file, false);
    rawFile.send();
    if (rawFile.status == 200) {
		return rawFile.responseText;
	} 
}