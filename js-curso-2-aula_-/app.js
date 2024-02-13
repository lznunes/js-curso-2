let listanumeroescolhidos = []
let numeroLimite = 4
let numerosecreto = geraNumeroAleatorio()
let tentativas = 1



function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    if (chute == numerosecreto) {
        menagemSucesso = `Você acertou em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('h1', 'Parabénsss!!');
        exibirTextoNaTela('p', menagemSucesso);
        limparCampo();
        document.getElementById('reiniciar').removeAttribute('disabled');
        }
    else if (chute < numerosecreto) {
        exibirTextoNaTela('p', 'o número correto é maior');
        limparCampo();
    } else {
        exibirTextoNaTela('p', 'o número correto é menor');
        limparCampo();
    }
    tentativas++;
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function geraNumeroAleatorio() {
    let quantidadelimite = numeroLimite;
    if (quantidadelimite == listanumeroescolhidos.length){
        let listanumeroescolhidos =[]
    }
    
    let numerosorteado = parseInt(Math.random() * numeroLimite + 1);
      
    if (listanumeroescolhidos.includes(numerosorteado)) {
        return geraNumeroAleatorio();
        console.log(listanumeroescolhidos)
    } else
    {
        listanumeroescolhidos.push(numerosorteado);
        return numerosorteado;
        console.log(listanumeroescolhidos)
    }
}
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMensagemInicais() {
    exibirTextoNaTela( 'h1',  'Jogo de número secreto');
    exibirTextoNaTela( 'p',  'Escolha um número aleatório de 1 a 10:');
}

function reiniciarJogo(){
    numerosecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicais();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}

exibirMensagemInicais();
