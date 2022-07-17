const panel = document.querySelector('.panel');
const heh = document.querySelector('.heh img');
const hehdiv = document.querySelector('.heh');

document.addEventListener('click', () => {
    setTimeout(() => {document.body.style.overflow = 'hidden';
    hehdiv.classList.add('heh-active');

    panel.style.display = 'none';
    heh.classList.add('heh-animation');
}, 400);
setInterval(() => {
    let audio = new Audio();                
    audio.src = 'assets/heh-lol.mp3';
    audio.autoplay = true; 
}, 11000);
    
    let audio = new Audio();                
    audio.src = 'assets/heh-lol.mp3';
    audio.autoplay = true; 

});

document.addEventListener('keydown', () => {
    setTimeout(() => {document.body.style.overflow = 'hidden';
    hehdiv.classList.add('heh-active');

    panel.style.display = 'none';
    heh.classList.add('heh-animation');
}, 400);
    setInterval(() => {
    let audio = new Audio();                
    audio.src = 'assets/heh-lol.mp3';
    audio.autoplay = true; 
}, 11000);
    
    let audio = new Audio();                
    audio.src = 'assets/heh-lol.mp3';
    audio.autoplay = true; 
})