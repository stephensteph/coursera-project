function openNav() {
	document.getElementById('mySideNav').style.width = "300px";
}

function closeNav() {
	document.getElementById('mySideNav').style.width = "0";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}


function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	slides[slideIndex-1].style.display = "block";
}