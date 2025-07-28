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

// Música de fundo
const musica = document.getElementById('musicaFundo');
window.addEventListener('load', () => {
  const tentativa = musica.play();
  if (tentativa !== undefined) {
    tentativa.catch(() => {
      document.addEventListener('click', () => musica.play(), { once: true });
    });
  }
});

// Contador completo
function atualizarContadorCompleto() {
  const inicio = new Date('2025-07-20T00:00:00');
  const agora = new Date();
  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();
  let horas = agora.getHours() - inicio.getHours();
  let minutos = agora.getMinutes() - inicio.getMinutes();
  let segundos = agora.getSeconds() - inicio.getSeconds();

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
    const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += mesAnterior;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }

  document.getElementById('dias').innerText =
    `${anos} anos, ${meses} meses, ${dias} dias, ${horas}h ${minutos}min ${segundos}s juntinhos ❤️`;
}

setInterval(atualizarContadorCompleto, 1000);
