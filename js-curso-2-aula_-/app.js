let numeroaleatorio = geraNumeroAleatorio()
let tentativas = 1


function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    if (chute == numeroaleatorio) {
        menagemSucesso = `Você acertou em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Parabénsss!!');
        exibirTextoNaTela('p', menagemSucesso);
    }
    else if (chute < numeroaleatorio) {
        exibirTextoNaTela('p', 'o número correto é maior');
    } else {
        exibirTextoNaTela('p', 'o número correto é menor');
    }
    tentativas++;
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function geraNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1)
}

exibirTextoNaTela( 'h1',  'Jogo de número secreto');
exibirTextoNaTela( 'p',  'Escolha um número aleatório de 1 a 10:');
