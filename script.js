const btnAbrir = document.getElementById('btn-abrir');
const musica = document.getElementById('musica');
const overlay = document.getElementById('overlay');

btnAbrir.addEventListener('click', () => {
    overlay.style.transition = 'opacity 0.8s ease, visibility 0.8s';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';

    musica.volume = 0.5;
    musica.play().catch(e => console.log("Áudio bloqueado"));

    setTimeout(checkReveal, 300);
});

function checkReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 60) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
window.onload = checkReveal;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
