window.addEventListener('mousemove', (e) => {
    let x = (e.clientX / window.innerWidth) * 100;
    let y = (e.clientY / window.innerHeight) * 100;
  
    document.querySelector('.video-background').style.transform = `translate(-50%, -50%) translate(${x / 20}%, ${y / 20}%)`;
  });
