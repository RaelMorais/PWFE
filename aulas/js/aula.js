// Aula do dia 27/03 


// Função que exibe um alerta com "Olá mundo"
function saudar(){
    alert("Olá mundo")  // Mostra a mensagem "Olá mundo" em um alerta
}

saudar(); // Chama a função saudar

// Função que soma dois números e retorna o resultado
function Soma2(a, b){
    console.log(a);  // Exibe o valor de "a" no console
    return a + b;   // Retorna a soma de "a" e "b"
}

let resultado = Soma2(10, 20);  // Chama a função Soma2 passando 10 e 20
document.write(resultado);  // Exibe o resultado (30) na página

// Função que soma até 4 valores com valores padrões para os argumentos
function somarVarios(a = 0, b = 0, c = 0, d = 0){
    return a + b + c + d;  // Retorna a soma de todos os valores passados
}

let result = somarVarios(10, 20, 30, 40);  // Chama a função com 4 números
document.write(`<p>resultado é: ${result}</p>`);  // Exibe o resultado (100) na página

// Função que converte uma frase para maiúsculas
function converterMaiusculo(frase){
    return frase.toUpperCase();  // Retorna a frase em maiúsculas
}

let frase = prompt("Informe uma frase: ");  // Solicita ao usuário uma frase
let fraseGrande = converterMaiusculo(frase);  // Converte a frase para maiúsculas
document.write(`Frase em maiúsculo: ${fraseGrande}`);  // Exibe a frase em maiúsculo na página

// Função que retorna a quantidade de caracteres em uma frase
function qtdCaracter(frase){
    return frase.length;  // Retorna o número de caracteres da frase
}

// Função que remove os espaços no início e no final de uma frase
function limparEspacos(){
    return frase.trim();  // Retorna a frase sem espaços nas extremidades
}

let qtddCaracter = qtdCaracter(frase);  // Chama a função para contar os caracteres da frase
document.write(`<p>Frase: ${qtddCaracter}</p>`);  // Exibe a quantidade de caracteres na página
console.log(qtddCaracter);  // Exibe a quantidade de caracteres no console

let limpo = limparEspacos(frase);  // Chama a função para remover espaços
document.write(`<p>${limpo}</p>`);  // Exibe a frase sem espaços na página

// Modifica a cor do texto do segundo <h1> para azul
let h1 = window.document.getElementsByTagName('h1')[1];
h1.style.color = 'blue';  // Altera a cor do texto para azul

// Modifica o fundo da página para preto
let corpo = window.document.body;
corpo.style.background = 'black';  // Altera o fundo da página para preto
