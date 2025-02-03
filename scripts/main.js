// This file contains the JavaScript code for the website. It handles interactivity, such as form submissions, animations, and any dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // Here you can add the code to send the form data to your server
            // For example, using fetch:
            // fetch('/your-server-endpoint', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ name, email, message })
            // }).then(response => {
            //     if (response.ok) {
            //         alert('Message sent successfully!');
            //     } else {
            //         alert('Failed to send message.');
            //     }
            // }).catch(error => {
            //     console.error('Error:', error);
            //     alert('Failed to send message.');
            // });

            // Clear the form
            contactForm.reset();
        });
    }

    // Example: Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});