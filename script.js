// Script.js
function openPreview(image) {
    // Get the lightbox and image elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Set the lightbox image source to the clicked image
    lightboxImg.src = image.src;

    // Show the lightbox
    lightbox.style.display = 'flex';

    // Prevent body scrolling
    document.body.classList.add('lightbox-active');
}

function closePreview() {
    // Get the lightbox
    const lightbox = document.getElementById('lightbox');

    // Hide the lightbox
    lightbox.style.display = 'none';

    // Restore body scrolling
    document.body.classList.remove('lightbox-active');
}
