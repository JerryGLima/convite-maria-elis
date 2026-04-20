const btnAbrir = document.getElementById('btn-abrir');
const musica = document.getElementById('musica');
const overlay = document.getElementById('overlay');

// Clique para entrar
btnAbrir.addEventListener('click', () => {
    // Esconde tela de entrada
    overlay.style.transition = 'opacity 0.8s ease, visibility 0.8s';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';

    // Inicia música
    musica.volume = 0.5;
    musica.play().catch(e => console.log("Áudio bloqueado"));

    // Ativa animações de entrada do conteúdo
    setTimeout(checkReveal, 300);
});

// Lógica de Scroll Reveal
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

// Garante que comece no topo
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
