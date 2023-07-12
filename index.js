import chalk from 'chalk';
import PromptSync from 'prompt-sync';

let senha = [];

let letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
let letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numero = '0123456789';
let simbolos = '!@#$%*&';

function geraSenhaMaiuscula (){
return letrasMaiusculas[Math.floor(Math.random() * letrasMaiusculas.length)];
}

function geraSenhaNumero (){
    return numero[Math.floor(Math.random() * numero.length)];
}

function geraSenha(tamanho) {
    while(tamanho > senha.length) {
        // senha.push(geraSenhaMaiuscula());
        let senhaMaiuscula = geraSenhaMaiuscula();
        let senhaNumero = geraSenhaNumero();

        
        }

    return senha.toString();
}

function shufle(arr1, arr2, tamanho) {
    let senhaEmbaralhada = [];
    while(tamanho > senhaEmbaralhada.length) {
        
    }
}

console.log(geraSenha(10));
