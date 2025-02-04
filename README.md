
## Overview
This project is a simple website focused on ethical hacking, featuring various sections such as blogs, services, about, and contact. It includes user authentication and admin features.

## Project Structure
```
html-project
├── assets
│   └── allabouthack.jpeg
├── scripts
│   ├── load-blogs.js
│   ├── main.js
│   └── toggle-admin.js
├── styles
│   └── main.css
├── index.html
├── add-url.html
└── README.md
```

## File Descriptions

- **index.html**: The main HTML file that contains the structure of the website, including the navigation bar, sections for blogs, services, about, and contact, as well as scripts for functionality.

- **assets/allabouthack.jpeg**: An image asset used in the website, specifically for the logo in the navigation bar.

- **scripts/load-blogs.js**: This script is responsible for loading and displaying blog content on the index.html page.

- **scripts/main.js**: This script contains general JavaScript functionality for the website, including user authentication and display logic.

- **scripts/toggle-admin.js**: This script handles the logic for toggling admin features on the website.

- **styles/main.css**: The main CSS file that contains styles for the website.

- **add-url.html**: This HTML page contains a form that takes two inputs from the user: a URL and a name for the URL. Upon submission, it will create a Bootstrap button with the class "d-grid gap-2" on the index.html page.

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `index.html` file in a web browser to view the website.
3. Use the `add-url.html` page to add new URLs and names, which will be displayed as buttons on the main page.

## Features
- User authentication and display of user-specific links.
- Dynamic loading of blog content.
- Admin features for managing content.
- Responsive design using Bootstrap.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All about hack.</title>
    <link rel="stylesheet" href="styles/main.css">
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-custom">
            <a class="navbar-brand" href="#">
                <img src="assets/allabouthack.jpeg" alt="AllAboutHack Logo" style="height: 40px;">
                AllAboutHack
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                    <li class="nav-item" id="add-blog-link" style="display: none;"><a class="nav-link" href="add-blog.html">Add Blog</a></li>
                    <li class="nav-item" id="signup-link"><a class="nav-link" href="signup.html">Sign Up</a></li>
                    <li class="nav-item" id="signin-link"><a class="nav-link" href="signin.html">Sign In</a></li>
                    <li class="nav-item" id="logout-link" style="display: none;"><a class="nav-link" href="#" id="logout">Logout</a></li>
                    <li class="nav-item"><span class="nav-link" id="username-display"></span></li>
                </ul>
            </div>
        </nav>
    </header>
    <main class="container mt-4">
        <section id="blogs" class="mb-4">
            <h2>Our Blogs</h2>
            <div id="blog-container"></div>
        </section>
        <section id="services" class="mb-4">
            <h2>Our Services</h2>
            <p>We offer a range of ethical hacking services to help secure your systems.</p>
        </section>
        <section id="about" class="mb-4">
            <h2>About Us</h2>
            <p>We are a team of certified ethical hackers dedicated to improving cybersecurity.</p>
        </section>
        <section id="contact" class="mb-4">
            <h2>Contact Us</h2>
            <form id="contact-form">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message:</label>
                    <textarea class="form-control" id="message" name="message" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
        </section>
        <button id="toggle-admin" class="btn btn-secondary">Toggle Admin</button>
        <div id="button-container"></div> <!-- Add this div to hold the new button -->
    </main>
    <footer class="footer-custom text-center py-3">
        <p>&copy; 2023 AllAboutHack. All rights reserved.</p>
    </footer>
    <script src="scripts/main.js"></script>
    <script src="scripts/load-blogs.js"></script>
    <script src="scripts/toggle-admin.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const usernameDisplay = document.getElementById('username-display');
            const addBlogLink = document.getElementById('add-blog-link');
            const logoutLink = document.getElementById('logout-link');
            const signupLink = document.getElementById('signup-link');
            const signinLink = document.getElementById('signin-link');
            const currentUser = localStorage.getItem('currentUser');
            const isAdmin = JSON.parse(localStorage.getItem('isAdmin'));
            if (currentUser) {
                usernameDisplay.textContent = `Welcome, ${currentUser}`;
                addBlogLink.style.display = 'block';
                logoutLink.style.display = 'block';
                signupLink.style.display = 'none';
                signinLink.style.display = 'none';
            }

            document.getElementById('logout').addEventListener('click', function() {
                localStorage.removeItem('currentUser');
                localStorage.removeItem('isAdmin');
                window.location.href = 'index.html';
            });

            // Load the new button from localStorage
            const newButtonHTML = localStorage.getItem('newButton');
            if (newButtonHTML) {
                const buttonContainer = document.getElementById('button-container');
                buttonContainer.innerHTML = newButtonHTML;
            }
        });
    </script>
    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>