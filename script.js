// ========================================
// TOTAL TOUCH CLEANING & DETAILING
// JAVASCRIPT
// ========================================


// ========================================
// MOBILE MENU
// ========================================

const menuButton = document.getElementById("menuButton");

const mainNav = document.getElementById("mainNav");


if (menuButton && mainNav) {

    menuButton.addEventListener("click", function () {

        mainNav.classList.toggle("active");

    });


    // Close menu after clicking a navigation link

    const navLinks = mainNav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("active");

        });

    });

}



// ========================================
// BOOKING FORM
// ========================================

const bookingForm =
    document.getElementById("bookingForm");


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Get form information

            const name =
                document.getElementById("name").value.trim();

            const phone =
                document.getElementById("phone").value.trim();

            const service =
                document.getElementById("service").value;

            const message =
                document.getElementById("message").value.trim();


            // Check required information

            if (!name || !phone || !service) {

                alert(
                    "Please enter your name, phone number and select a service."
                );

                return;

            }


            // Create WhatsApp message

            const whatsappMessage =
                "Hello Total Touch Cleaning & Detailing." +
                "\n\n" +

                "NEW BOOKING REQUEST" +
                "\n\n" +

                "Name: " + name +
                "\n" +

                "Phone: " + phone +
                "\n" +

                "Service: " + service +
                "\n" +

                "Message: " +
                (message || "No additional message");


            // Encode message

            const encodedMessage =
                encodeURIComponent(whatsappMessage);


            // WhatsApp number

            const whatsappURL =
                "https://wa.me/233557734245?text=" +
                encodedMessage;


            // Open WhatsApp

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}