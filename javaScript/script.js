            let indexSlide = 1;

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
                // let dots = document.getElementsByClassName("doted");
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
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[indexSlide - 1].style.display = "block";
                dots[indexSlide - 1].className += " active";
            }