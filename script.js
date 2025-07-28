
// Corações caindo
function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.innerText = '❤️';
    coracao.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(coracao);
    setTimeout(() => coracao.remove(), 8000);
}
setInterval(criarCoracao, 500);

// Música de fundo com fallback
const musica = document.getElementById('musicaFundo');
window.addEventListener('load', () => {
    const tentativa = musica.play();
    if (tentativa !== undefined) {
        tentativa.catch(() => {
            document.addEventListener('click', () => musica.play(), { once: true });
        });
    }
});

// Contador de dias juntos
function atualizarContador() {
    const inicio = new Date("2025-07-20");
    const hoje = new Date();
    const diff = Math.floor((hoje - inicio) / (1000 * 60 * 60 * 24));
    document.getElementById("dias").innerText = `${diff} dias de amor ❤️`;
}
atualizarContador();
