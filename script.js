
var img = document.getElementById("hint-div");
var block = document.getElementById("hint-block");
var helloBlock = document.getElementById("hello-text");
var mailBlock = document.getElementById("mail-text");
var mailText = document.getElementById("mail-text-p");
var href = document.getElementById("a-block");

var src = "http://webcrypt.org/ru";

function showHint(){
	block.style.display = "block";
	img.style.display = "block";
}

function hide(){
	block.style.display = "none";
	img.style.display = "none";
}


function closeMail(){
	helloBlock.style.display = "block";
	mailBlock.style.display = "none";
}

function showMail(file){
	helloBlock.style.display = "none";
	mailBlock.style.display = "block";
    var xhr= new XMLHttpRequest();
    xhr.open("GET", "https://qargwic.github.io/mails/" + file + ".txt", true);
    xhr.send();
    xhr.onreadystatechange = function() { // (3)
		if (xhr.status != 200) {
	    	console.log(xhr.status + ': ' + xhr.statusText);
		} else {
			var t = xhr.responseText;
			mailText.innerHTML = t;
			if (t.length < 2000)
				href.setAttribute("href", src + t);
			else
				href.setAttribute("href", "http://webcrypt.org/ru#decryption");
		}
	}
}

function copyMail(){
	var range = document.createRange();
	range.selectNode(mailText); 
	window.getSelection().addRange(range); 
	try { 
		document.execCommand('copy'); 
	} catch(err) { 
		console.log('М, нам не повезло:)'); 
	} 
	window.getSelection().removeAllRanges();
}