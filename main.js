const numeroSemha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclik = diminuiTamanho;
botos[1].onclik = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1){
        // amanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
}
    function aumentaTamanho() {
        if (tamanhoSenha < 20){
            // tamanhoSenha = tamanhoSenha+1;
            tamanhoSenha++;
        }
        numeroSenha.textContent = tamanhoSenha;
    }