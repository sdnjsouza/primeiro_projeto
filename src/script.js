const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
const setas = document.querySelectorAll('.seta')
let imagemAtual = 0;
let setaAtual = 0;

function desativarSeta() {
    setas[setaAtual].classList.add('desativar-seta')
}
function ativarSeta() {
    setas[setaAtual].classList.remove('desativar-seta')
}

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}
function exibirImagens() {
    imagensPainel[imagemAtual].classList.add('mostrar')
}
setaAvancar.addEventListener('click', function () {

    if (imagemAtual ===  imagensPainel.length - 2) {
        setaAtual = 1;
        imagemAtual++;

        esconderImagens();
        exibirImagens();
        desativarSeta();
        return;
    }
    imagemAtual++;
    ativarSeta();
    esconderImagens();
    exibirImagens();
})
setaVoltar.addEventListener('click', function () {
    if (imagemAtual === 1) {
        setaAtual = 0;
        imagemAtual--;

        esconderImagens();
        exibirImagens();
        desativarSeta();
        return;
    }
    imagemAtual--;
    ativarSeta();
    esconderImagens();
    exibirImagens();
})
