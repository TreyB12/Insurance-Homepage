document.addEventListener("DOMContentLoaded", (event) => {
    const button1 = document.querySelector('.hero-button');
    const button2 = document.querySelector('.top-button');
    const button3 = document.querySelector('.footer-button');

    // Check if the button exists before assigning the onclick
    if (button1) {
        button1.onclick = function() {
            window.location.href = "start-quote.html";
        };
    } else {
        console.error('Button with class .hero-button not found!');
    }

    if (button2) {

        button2.onclick = function () {

            window.location.href = "start-quote.html";

        } 
    } else {

        console.error('Button with class .top-button not found!')
    }

    if (button3) {
        button3.onclick = function () {
            window.location.href = "start-quote.html";

        } 
    } else {

            console.error('Button with class .footer-button not found!')
        };
    }
);


