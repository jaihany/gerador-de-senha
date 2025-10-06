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
        geraSenha();
    }
    numeroSenha.textContent = tamanhoSenha;
}
    function aumentaTamanho() {
        if (tamanhoSenha < 20){
            // tamanhoSenha = tamanhoSenha+1;
            tamanhoSenha++;
        }
        numeroSenha.textContent = tamanhoSenha;
        geraSenha();
    }

    const campoSenha = document.querySelector('#campo-senha');
    const checkbox = document.querySelectorAll('.checkbox');

    for (i = 0; i < checkbox.length; i++) {
        checkbox[i].onclik = geraSenha;
    }

    const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
    const numeros = '0123456789';
    const simbolos = '!@%*?';

    geraSenha();

    function geraSenha() {
        let alfabeto = '';
        if (checkbox[0].checked) {
            alfabto = alfabeto+ letrasMaiusculas;
        }
        if (checkbox[1].checked) {
            alfabeto = alfabeto+ 
        }
    }