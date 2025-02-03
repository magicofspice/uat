document.addEventListener('DOMContentLoaded', function() {
    const toggleAdminButton = document.getElementById('toggle-admin');

    toggleAdminButton.addEventListener('click', function() {
        let isAdmin = JSON.parse(localStorage.getItem('isAdmin')) || false;
        isAdmin = !isAdmin;
        localStorage.setItem('isAdmin', isAdmin);
        window.location.reload();
    });
});