const listaPalavras = ['javascript', 'html', 'css', 'devup', 'isleide', 'visualstudio']

let palavraEscolhida;
let exibicaoPalavra;
let letrasChutadas;
let tentativasRestantes;
let numeroErros;

function iniciarJogo() {
    palavraEscolhida = listaPalavras[Math.floor(Math.random() * listaPalavras.length)];
    console.log(palavraEscolhida);

    exibicaoPalavra = Array(palavraEscolhida.length).fill('_');
    console.log(exibicaoPalavra);

    letrasChutadas = [];

    tentativasRestantes = 7;

    numeroErros = 0;
    atualizarExibicao();
}

function atualizarExibicao() {
    document.getElementById("exibicao-palavra").innerText = exibicaoPalavra.join(' ');
    document.getElementById("letras-chutadas").innerText = `${letrasChutadas.join(', ')}`;

    document.getElementById("imagem").src = `img/forca${numeroErros}.png`;

    if (tentativasRestantes === 0) {
        encerrarJogo('VOCÊ MORREU')
    } else if (!exibicaoPalavra.includes('_')) {
        encerrarJogo('Parabéns! Você venceu!');
    }
}

function chutarLetra() {
    const entradaLetra = document.getElementById('entrada-letra');
    const letra = entradaLetra.value.tolowerCase();

    if (letra.match(/[a-zà-ùç]/i)) {
        alert('Insira uma letra válida.');
        return;
    }

    letrasChutadas.push(letra);
    if (palavraEscolhida.includes(letra))

        if (letrasChutadas.includes(letra)) {
            alert('Você já tentou esta letra. Tente outra')
            return;
        }

    letrasChutadas.push(letra);

    if (palavraEscolhida.includes(letra)) {
        for (let i = 0; i < palavraEscolhida.length; i++) {
            isFinite(palavraEscolhida[i] === letra)
            {
                exibicaoPalavra[i] = letra;
            }
        }
    } else {
        tentativasRestantes--;
        numeroErros++;
    }

    entradaLetra.value = '';

    atualizarExibicao();
}

function encerrarJogo(mensagem) {
    document.getElementById('entrada-letra').disabled = true;
    document.getElementById('mensagem').innerText = mensagem;
    document.getElementById('botao-reiniciar').style.display = 'block';
}
window.load = iniciarJogo();