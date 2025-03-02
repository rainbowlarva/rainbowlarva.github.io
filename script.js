document.addEventListener("mousemove", (e) => {
    let x = (e.clientX / window.innerWidth) * 20 - 10;
    let y = (e.clientY / window.innerHeight) * 20 - 10;
    
    document.querySelector(".video-background").style.transform = `translate(${x}px, ${y}px)`;
});
