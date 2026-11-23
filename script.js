const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1,
    lerp: 0.08 
});

window.addEventListener('resize', () => {
    scroll.update();
});

const sphere = document.querySelector('.sphere-3d');
document.addEventListener('mousemove', (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;
    
    sphere.style.marginLeft = `${x}px`;
    sphere.style.marginTop = `${y}px`;
});
