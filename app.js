let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;   
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function mengagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

mengagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mengagem = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mengagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute < numeroSecreto){
            exibirTextoNaTela('h1','errou!');
            exibirTextoNaTela('p','O numero secreto é maior');
        }else{
            exibirTextoNaTela('h1','errou!');
            exibirTextoNaTela('p','O numero secreto é menor');
        }
        tentativas++;

    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mengagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}








//Desafio 1
// function mengagem(){
//    console.log('Olá mundo');
// }
// mengagem();

//Desafio 2
// function exibirNome(nome){
//     console.log(`Olá ${nome}`);
// }
// exibirNome('iris');

//Desafio 3
// function exibirDobro(numero){
//     return numero * 2 ;  
// }

// let resultado = exibirDobro(9);
// console.log(resultado);


//Desafio 4
// function calcularMedia(a,b,c){
//     return (a + b + c)/3;
// }
// console.log(calcularMedia(2,5,2));

//Desafio 5
// function maiorNumero(a,b){
//     if(a > b){
//         console.log(a);
//     }else{
//         console.log(b);
//     }
// }
// maiorNumero(4,2);

//Desafio 6
// function numeroPeloNumero(a){
//     return a * a;
// }
// console.log(numeroPeloNumero(5));

