// Track the mouse position to apply continuous parallax effect
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    // Get the mouse position as a percentage of the viewport size
    mouseX = (e.clientX / window.innerWidth) * 100;
    mouseY = (e.clientY / window.innerHeight) * 100;
  
    // Apply the parallax effect based on mouse movement
    document.querySelector('.video-background').style.transform = `translate(-50%, -50%) translate(${mouseX / 30}%, ${mouseY / 30}%)`;
});

// Use requestAnimationFrame to ensure smooth updates during video reloads
function updateVideoPosition() {
    document.querySelector('.video-background').style.transform = `translate(-50%, -50%) translate(${mouseX / 30}%, ${mouseY / 30}%)`;
    requestAnimationFrame(updateVideoPosition);
}

// Start the animation loop
updateVideoPosition();

window.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', () => {
        let audio = new Audio('audio/kendrick.ogg');
        audio.play().then(() => {
            console.log("Audio is playing");
        }).catch(error => console.error('Audio playback failed:', error));
    }, { once: true }); // Ensures it only plays once
});
