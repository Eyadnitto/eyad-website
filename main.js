const water = document.querySelector('.hello')
const jscon = new JSConfetti();

water.addEventListener("click", () =>{
    jscon.addConfetti({
        emojis: ['👊'],
        emojisSize: 50,
        confettiNumber: 100,
    });
}); 
