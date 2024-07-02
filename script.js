// Array of image URLs
const imageUrls = [
    { url: 'https://picsum.photos/id/237/200/300' },
    { url: 'https://picsum.photos/id/238/200/300' },
    { url: 'https://picsum.photos/id/239/200/300' },
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
