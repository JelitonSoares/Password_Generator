import geraSenha from "./index.js";
import chalk from "chalk";

const caminho = process.argv;

function imprimeSenha(tamanho) {
    console.log(chalk.yellow('Senha:'), chalk.bold.underline.green(geraSenha(tamanho)));
}


imprimeSenha(caminho[2]);