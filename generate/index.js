import chalk from 'chalk';
import PromptSync from 'prompt-sync';

const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';

function geraSenha (tamanho) {
    let senha = '';
    if (tamanho >= 5 && tamanho <= 30) {
        for (let i = 0; i < tamanho; i++) {
            let n = caracteres.length;
            senha += caracteres.charAt(Math.floor(Math.random() * n));
        }
        return senha;
    } else {
        trataErro();
    }
}

function trataErro() {
    throw new Error(chalk.bold.red('Tamanho da senha inválido!!'));
}

export default geraSenha;