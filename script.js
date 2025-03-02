// Track the mouse position to apply continuous parallax effect
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    // Get the mouse position as a percentage of the viewport size
    mouseX = (e.clientX / window.innerWidth) * 100;
    mouseY = (e.clientY / window.innerHeight) * 100;

    // Apply the parallax effect based on mouse movement, keeping the center of the video in place
    document.querySelector('.video-background').style.transform = `translate(-50%, -50%) translate(${mouseX / 30}%, ${mouseY / 30}%)`;
});
