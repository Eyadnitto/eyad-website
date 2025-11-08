const water = document.querySelector('.hello')
const jscon = new JSConfetti();

water.addEventListener("click", () =>{
    jscon.addConfetti({
        emojis: ['👊'],
        emojisSize: 80,
        confettiNumber: 100000,
    });
}); 
