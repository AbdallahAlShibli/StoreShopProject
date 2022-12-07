//dynamic slide show gallery
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
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}




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



var currentdate = new Date();
var datetime = " Today is " + currentdate.getDate() + "/"
    + (currentdate.getMonth() + 1) + "/"
    + currentdate.getFullYear() + ", and the time is "
    + currentdate.getHours() + ":"
    + currentdate.getMinutes() + ":"
    + currentdate.getSeconds();

document.getElementById("welcomeP").innerHTML = "Welcome to the FFPF Website!" + datetime;




//calculate discount


 //the function called when Calculate button is clicked.
 window.onload = () => {
    /*calling a function calculateDiscount which
    will calculate the amount for the bill.*/
    document.querySelector('#calculate').onclick =
        calculateDiscount;
}

function calculateDiscount() {
    /*assign values of ID : amount and
    discount to variables for further calculations.*/
    let amount = document.querySelector('#amount').value;
    let discount = document.querySelector('#discount').value;

    console.log(discount);
    /*if statement will work when user
    presses calculate without entering values. */
    //so will display an alert box and return.
    if (amount === '' && discount === 'Select') {
        alert("Please enter valid values");
        return;
    }


    /*calculating the amount by multiplying total-bill and type of discount;
*/
    //fixing the total amount upto 2 digits of decimal
    let total = (amount * discount);
    total = total.toFixed(2);
    amount = amount - total;

    if (discount == 0.20) {
        document.querySelector('.amountDis').innerHTML = "Th Amount After Discount of 20%";
    } else {
        document.querySelector('.amountDis').innerHTML = "Th Amount Without Discount";
    }
    //finally displaying the amount value
    document.querySelector('.amount').style.display = 'block';
    document.querySelector('#total').innerHTML = amount;
}