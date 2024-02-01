let numeroaleatorio = geraNumeroAleatorio


function verificarChute() {
    console.log('0 botão foi clicado')
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function geraNumeroAleatorio() {
    return Math.random * 10 + 1
}

exibirTextoNaTela( 'h1',  'Jogo de número secreto');
exibirTextoNaTela( 'p',  'Escolha um número aleatório de 1 a 10:');
