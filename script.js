window.addEventListener('mousemove', (e) => {
    let x = (e.clientX / window.innerWidth) * 100;
    let y = (e.clientY / window.innerHeight) * 100;

    // Apply parallax by changing the background position based on mouse movement
    document.querySelector('.video-background').style.transform = `translate(-50%, -50%) translate(${x / 30}%, ${y / 30}%)`;
});
