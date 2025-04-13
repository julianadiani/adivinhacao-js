/*
O jogo irá gerar um número aleatório entre 1 e 100
O jogador terá que adivinhar qual é esse número
O jogo dará dicas ao jogador, dizendo se o número chutado é maior ou menor que o número secreto
O jogo termina quando o jogador acertar o número ou quando ele atingir um número máximo de tentativas

1- Jogador digita um numero ok
2- Verificar se é um numero de 1 a 100 ok
3- Converte o array do input em numero
4- verifica se está certo
4- Senão acertar dar dicas se é maior ou menor que o n chutado
5- Limitar com o numero máximo de tentativas ok
6- Mostrar o resultado final
*/

let chute = document.getElementById("chute");
let numero = Math.floor(Math.random() * 100) + 1;
let nTentativa = document.getElementById("tentativas");
let tentativas = 0;
let maxTentativas = 10;
let mensagens = document.getElementById("mensagens");

function adivinhacao() {
    let numeroChutado = parseInt(chute.value);

    while (isNaN(numeroChutado) || numeroChutado < 1 || numeroChutado > 100) {
        mensagens.textContent = "Digite um número entre 1 e 100!";
        return;
    }

    tentativas++;

    let tentativasRestantes = maxTentativas - tentativas;
    nTentativa.textContent = `Tentativas restantes: ${tentativasRestantes}`;

    if (numeroChutado === numero) {
        mensagens.textContent = `Parabéns, você acertou o número ${numero} em ${tentativas} tentativas`;
        return;
    } 

    if (numeroChutado < numero) {
        mensagens.textContent = `O número secreto é maior. Tentativa ${tentativas} de ${maxTentativas}`;
    } else {
        mensagens.textContent = `O número secreto é menor. Tentativa ${tentativas} de ${maxTentativas}`;
    }

    if (tentativas >= maxTentativas) {
        mensagens.textContent = `Você perdeu! O número secreto era ${tentativas}`;
    }
}