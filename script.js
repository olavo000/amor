// Contador de tempo juntos
const dataInicio = new Date('2025-07-20T00:00:00'); // Ajuste aqui a data do começo do relacionamento

function atualizarContador() {
    const agora = new Date();

    let anos = agora.getFullYear() - dataInicio.getFullYear();
    let meses = agora.getMonth() - dataInicio.getMonth();
    let dias = agora.getDate() - dataInicio.getDate();
    let horas = agora.getHours() - dataInicio.getHours();
    let minutos = agora.getMinutes() - dataInicio.getMinutes();
    let segundos = agora.getSeconds() - dataInicio.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        meses--;
        // pega quantos dias tem no mês anterior
        const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += mesAnterior.getDate();
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById('dias').textContent =
        `${anos} ano(s), ${meses} mês(es), ${dias} dia(s), ` +
        `${String(horas).padStart(2, '0')}h ${String(minutos).padStart(2, '0')}min ${String(segundos).padStart(2, '0')}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador(); // chamada inicial

// Corações caindo
function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.innerText = '❤️';
    coracao.style.left = Math.random() * 100 + 'vw';
    coracao.style.fontSize = (12 + Math.random() * 24) + 'px';
    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 8000);
}

setInterval(criarCoracao, 500);

// Música de fundo - autoplay com fallback
const musica = document.getElementById('musicaFundo');


function tocarMusica() {
  musica.play().catch(() => {
    // Se não conseguir tocar (bloqueio do navegador), espera o primeiro clique para tocar
    document.addEventListener('click', () => {
      musica.play();
    }, { once: true });
  });
}

window.addEventListener('load', () => {
  tocarMusica();
});


window.addEventListener('load', () => {
    const tocar = musica.play();
    if (tocar !== undefined) {
        tocar.catch(() => {
            // fallback: tocar após clique do usuário
            document.addEventListener('click', () => musica.play(), { once: true });
        });
    }
});
