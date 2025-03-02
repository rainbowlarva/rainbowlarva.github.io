window.addEventListener('mousemove', (e) => {
  let x = (e.clientX / window.innerWidth) * 100;
  let y = (e.clientY / window.innerHeight) * 100;

  // Only apply the parallax effect
  document.querySelector('.video-background').style.transform = `translate(-50%, -50%) translate(${x / 30}%, ${y / 30}%)`;
});
