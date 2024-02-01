let numeroaleatorio = geraNumeroAleatorio()


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroaleatorio) {
        exibirTextoNaTela('h1', 'Parabénsss!!')
        exibirTextoNaTela('p', 'Você acertou.')
    }
    else if (chute < numeroaleatorio) {
        exibirTextoNaTela('p', 'o número correto é maior')
    } else {
        exibirTextoNaTela('p', 'o número correto é menor')
    }
    console.log(chute == numeroaleatorio);
    console.log(numeroaleatorio);
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
