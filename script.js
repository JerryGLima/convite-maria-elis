const btnAbrir = document.getElementById('btn-abrir');
const musica = document.getElementById('musica');
const overlay = document.getElementById('overlay');

// Evento de clique para abrir e tocar a música
if (btnAbrir) {
    btnAbrir.addEventListener('click', function() {
        // Tenta tocar a música
        if (musica) {
            musica.play().then(() => {
                console.log("Música tocando!");
            }).catch(function(error) {
                console.error("Erro ao tocar a música:", error);
            });
        }

        // Esconde a tela de entrada
        if (overlay) {
            overlay.style.transition = 'opacity 0.8s ease';
            overlay.style.opacity = '0';
            
            setTimeout(() => {
                overlay.style.display = 'none';
                checkReveal(); // Ativa as animações de entrada
                iniciarBaloes(); // Começa a soltar os balões
            }, 800);
        }
    });
}

// Função para criar balões flutuantes
function iniciarBaloes() {
    const container = document.getElementById('baloes-container');
    if (!container) return;
    
    const imagensBaloes = ['balao1.png', 'balao2.png', 'balao3.png'];

    setInterval(() => {
        const balao = document.createElement('img');
        const imgAleatoria = imagensBaloes[Math.floor(Math.random() * imagensBaloes.length)];
        balao.src = imgAleatoria;
        balao.classList.add('balao-animado');
        
        // Se a imagem falhar, usa um emoji
        balao.onerror = function() {
            const emojiBalao = document.createElement('div');
            emojiBalao.className = 'balao-animado';
            emojiBalao.style.fontSize = '70px';
            emojiBalao.style.left = balao.style.left;
            emojiBalao.style.animationDuration = balao.style.animationDuration;
            emojiBalao.innerHTML = '🎈';
            container.appendChild(emojiBalao);
            balao.remove();
            
            setTimeout(() => emojiBalao.remove(), parseFloat(emojiBalao.style.animationDuration) * 1000);
        };

        balao.style.left = (Math.random() * 80 + 10) + '%';
        const tamanho = Math.random() * 60 + 60;
        balao.style.width = tamanho + 'px';
        
        const duracao = Math.random() * 5 + 8; // Entre 8 e 13 segundos
        balao.style.animationDuration = duracao + 's';

        container.appendChild(balao);

        // Remove o balão após a animação
        setTimeout(() => {
            if (balao.parentNode) balao.remove();
        }, duracao * 1000);
        
    }, 2000); // Um balão a cada 2 segundos para não sobrecarregar
}

// Função para animar os itens ao rolar a página
function checkReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
window.onload = checkReveal;
