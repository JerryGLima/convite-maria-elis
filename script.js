const btnAbrir = document.getElementById('btn-abrir');
const musica = document.getElementById('musica');
const overlay = document.getElementById('overlay');

// Evento de clique para abrir e tocar a música
btnAbrir.addEventListener('click', function() {
    
    // Tenta tocar a música imediatamente
    // O navegador permite som após o clique no botão
    musica.play().then(() => {
        console.log("Música tocando!");
    }).catch(function(error) {
        console.error("Erro ao tocar a música:", error);
    });

    // Esconde a tela rosa de entrada
    overlay.style.transition = 'opacity 0.8s ease';
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        checkReveal(); // Ativa as animações de entrada
    }, 800);
});

// Função para animar os itens ao rolar a página
function checkReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 60) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
window.onload = checkReveal;
