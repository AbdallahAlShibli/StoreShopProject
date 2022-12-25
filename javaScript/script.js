//dynamic slide show gallery change image every 3 seconds
let index = 0;
showSlides();

function showSlides() {
    let j;
    let slides0 = document.getElementsByClassName("carousel-item");
    let dots0 = document.getElementsByClassName("doted");
    for (j = 0; j < slides0.length; j++) {
        slides0[j].style.display = "none";
    }
    index++;
    if (index > slides0.length) { index = 1 }
    for (j = 0; j < dots0.length; j++) {
        dots0[j].className = dots0[j].className.replace(" active", "");
    }
    slides0[index - 1].style.display = "block";
    dots0[index - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}



//dynamic slide show gallery change image by user click
let indexSlide = index;

showSlide(indexSlide);

function plusSlides(n) {
    showSlide(indexSlide += n);
}

function currentSlide(n) {
    showSlide(indexSlide = n);
}

function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-item");
    let dots = document.getElementsByClassName("doted");
    if (n > slides.length) {
        indexSlide = 1;
    }
    if (n < 1) {
        indexSlide = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[indexSlide - 1].style.display = "block";
    dots[indexSlide - 1].className += "active";
}


//get current date and time
var currentdate = new Date();
var datetime = " Today is " + currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + ", and the time is "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

document.getElementById("welcomeP").innerHTML = "Welcome to the FFPF Website!" + datetime;//add current date and time to welcome paragraph




