// Array of image URLs
const imageUrls = [
    { url: 'https://via.placeholder.com/150' },
    { url: 'https://via.placeholder.com/200' },
    { url: 'https://via.placeholder.com/250' },
    // Add more image URLs as needed
];

// Function to download an image
function downloadImage(image) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
    });
}

// Function to handle the download and display of images
async function downloadAndDisplayImages() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Clear previous images

    try {
        // Create an array of promises for image downloads
        const downloadPromises = imageUrls.map(downloadImage);

        // Wait for all promises to resolve
        const images = await Promise.all(downloadPromises);

        // Display each downloaded image
        images.forEach(img => outputDiv.appendChild(img));
    } catch (error) {
        console.error(error.message);
    }
}

// Add event listener to the button
document.getElementById('download-images-button').addEventListener('click', downloadAndDisplayImages);
