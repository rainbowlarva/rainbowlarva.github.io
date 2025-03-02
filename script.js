// Track the mouse position for the parallax effect
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

// Event listener for mouse movement to update parallax
window.addEventListener('mousemove', updateParallax);

// Ensure the parallax effect is applied smoothly during video loop
function applyParallaxOnVideo() {
    // Apply the parallax effect based on the current mouse position
    videoBackground.style.transform = `translate(-50%, -50%) translate(${mouseX / 30}%, ${mouseY / 30}%)`;
    
    // Keep applying the parallax effect during the video playback (without resetting)
    requestAnimationFrame(applyParallaxOnVideo);
}

// Start the animation loop
applyParallaxOnVideo();
