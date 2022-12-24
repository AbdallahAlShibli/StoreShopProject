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





// Get the email input element
const emailInput = document.getElementById('form5Example2');

// Get the submit button element
const submitButton = document.querySelector('button[type="submit"]');

// Add a click event listener to the submit button
submitButton.addEventListener('click', function (event) {
    // Prevent the default action of the button (submitting the form)
    event.preventDefault();

    // Get the value of the email input
    const email = emailInput.value;

    // Validate the email
    if (!isValidEmail(email)) {
        // If the email is invalid, show an error message
        alert('Please enter a valid email address');
        return;
    }

    // If the email is valid, send the newsletter signup request
    sendNewsletterSignupRequest(email);
});

function isValidEmail(email) {
    // Use a regular expression to check if the email is in the correct format
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
}

function sendNewsletterSignupRequest(email) {
    // Use an HTTP request to send the newsletter signup request to the server
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/newsletter-signup');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`email=${encodeURIComponent(email)}`);
}
