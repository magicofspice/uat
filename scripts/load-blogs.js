document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.getElementById('blog-container');
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const isAdmin = JSON.parse(localStorage.getItem('isAdmin')) || false;

    function renderBlogs() {
        blogContainer.innerHTML = '';
        blogPosts.forEach((blogPost, index) => {
            const blogCard = document.createElement('div');
            blogCard.className = 'card mb-3';
            blogCard.innerHTML = `
                <img src="${blogPost.image}" class="card-img-top" alt="${blogPost.title} Image" onerror="this.onerror=null;this.src='assets/default-image.jpg';">
                <div class="card-body">
                    <h5 class="card-title">${blogPost.title}</h5>
                    <p class="card-text">${blogPost.description}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                    ${isAdmin ? `<button class="btn btn-danger remove-blog" data-index="${index}">Remove</button>` : ''}
                </div>
            `;
            blogContainer.appendChild(blogCard);
        });

        if (isAdmin) {
            // Add event listeners to the remove buttons
            const removeButtons = document.querySelectorAll('.remove-blog');
            removeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const index = this.getAttribute('data-index');
                    blogPosts.splice(index, 1);
                    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
                    renderBlogs();
                });
            });
        }
    }

    renderBlogs();
});