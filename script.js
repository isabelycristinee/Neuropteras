
const cartoes = document.querySelectorAll('.cartao');
const botaoProximo = document.getElementById('botao-proximo');

let indiceAtual = 0; 

botaoProximo.addEventListener('click', () => {
    cartoes[indiceAtual].classList.remove('ativo');

    indiceAtual = (indiceAtual + 1) % cartoes.length;

    cartoes[indiceAtual].classList.add('ativo');
});
