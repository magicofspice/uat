document.addEventListener('DOMContentLoaded', function() {
    const addBlogForm = document.getElementById('add-blog-form');

    addBlogForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const imageUrl = document.getElementById('image').value;
        const fileInput = document.getElementById('file');
        const description = document.getElementById('description').value;

        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onloadend = function() {
                const base64Image = reader.result;
                saveBlogPost(title, base64Image, description);
            };
            reader.readAsDataURL(file);
        } else {
            saveBlogPost(title, imageUrl, description);
        }
    });

    function saveBlogPost(title, image, description) {
        const blogPost = {
            title,
            image,
            description
        };

        // Save the blog post to localStorage
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        // Redirect to index.html
        window.location.href = 'index.html';
    }
});