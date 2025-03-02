// Track the mouse position to apply continuous parallax effect
let mouseX = 0;
let mouseY = 0;

// Select the video background element
const videoBackground = document.querySelector('.video-background');

// Function to apply parallax effect based on mouse movement
function updateParallax(e) {
    // Get the mouse position as a percentage of the viewport size
    mouseX = (e.clientX / window.innerWidth) * 100;
    mouseY = (e.clientY / window.innerHeight) * 100;
  
    // Apply the parallax effect based on mouse movement
    videoBackground.style.transform = `translate(-50%, -50%) translate(${mouseX / 30}%, ${mouseY / 30}%)`;
}

// Event listener for mouse movement
window.addEventListener('mousemove', updateParallax);

// Function to ensure smooth parallax update during video reloads
function updateVideoPosition() {
    // Continuously apply the parallax effect using requestAnimationFrame
    videoBackground.style.transform = `translate(-50%, -50%) translate(${mouseX / 30}%, ${mouseY / 30}%)`;
    requestAnimationFrame(updateVideoPosition); // Keep calling updateVideoPosition for smooth updates
}

// Start the animation loop
updateVideoPosition();
