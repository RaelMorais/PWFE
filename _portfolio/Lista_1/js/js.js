// Função para calcular a diferença entre dois números
function ver(){
    // Pegando os valores dos campos de entrada
    let number_one_ex1 = parseFloat(document.getElementById('formGroupExampleInput').value);
    let number_two_ex1 = parseFloat(document.getElementById('formGroupExampleInput2').value);

    // Calculando a diferença
    let diferenca = number_one_ex1 - number_two_ex1;

    // Verificando o valor da diferença
    if(diferenca < 0){
        // Se a diferença for negativa
        document.getElementById('resultados').textContent = "Negative Number";
    }
    else if(diferenca == 0){
        // Se a diferença for zero
        document.getElementById('resultados').textContent = "Not Difference";
    }else{
        // Se a diferença for positiva
        document.getElementById('resultados').textContent = diferenca;
    }
}

// Função para verificar se o número é par ou ímpar
function OddEvenNumber(){
    let number_one_ex2 = parseFloat(document.getElementById('formGroupExampleInput').value);

    // Verificando se o número é par ou ímpar
    if(number_one_ex2 % 2 == 0 ){
        document.getElementById('OddEven').textContent = `${number_one_ex2} is a Even number`;
    }else{
        document.getElementById('OddEven').textContent = `${number_one_ex2} is a Odd number`;
    }
}

// Função para verificar se o primeiro número é múltiplo do segundo
function Multiples(){
    let number_one_ex3 = parseFloat(document.getElementById('formGroupExampleInput').value);
    let number_two_ex3 = parseFloat(document.getElementById('formGroupExampleInput2').value);

    // Verificando se o primeiro número é múltiplo do segundo
    if(number_one_ex3 % number_two_ex3  == 0 ){
        document.getElementById('Multi').textContent = `${number_one_ex3} is multiple of ${number_two_ex3}`;
    }
    else{
        document.getElementById('Multi').textContent = `${number_one_ex3} is not multiple ${number_two_ex3}`;
    }
}

// Função para converter Celsius para Fahrenheit
function CtoF(){
    let number_one_ex4 = parseFloat(document.getElementById('formGroupExampleInput').value);
    let fahrenheit = (number_one_ex4 * 9/5) + 32;

    // Exibindo o resultado da conversão
    document.getElementById('Fah').textContent = `${number_one_ex4}°C is a ${fahrenheit}°F`;
}

// Função para calcular a área de um retângulo
function areaEbase(){
    let number_one_ex5 = parseFloat(document.getElementById('formGroupExampleInput').value);
    let number_two_ex5 = parseFloat(document.getElementById('formGroupExampleInput2').value);

    // Calculando a área
    let area = number_one_ex5 * number_two_ex5;

    // Exibindo o resultado da área
    document.getElementById('a&b').textContent = area;
}

// Função para calcular a média de duas notas e informar a situação do aluno
function Nota(){
    let nota1 = parseFloat(document.getElementById('formGroupExampleInput').value);
    let nota2 = parseFloat(document.getElementById('formGroupExampleInput2').value);

    // Calculando a média
    let average = (nota1 + nota2) / 2; 

    // Definindo a situação do aluno
    if(average >= 7){
        document.getElementById('NotaResult').textContent = 'Aproved';
    }else if(average >= 5 && average < 7){
        document.getElementById('NotaResult').textContent = 'Recuperation';
    }else{
        document.getElementById('NotaResult').textContent = 'Reproved';
    }

    // Verificando se a média é par ou ímpar
    if(average % 2 == 0){
        document.getElementById('EvenResult').textContent = `${average} is a Even`;
    }else{
        document.getElementById('EvenResult').textContent = `${average} is a Odd`;
    }
}

// Função para calcular o IMC (Índice de Massa Corporal)
function Imc(){
    let height = parseFloat(document.getElementById('formGroupExampleInput').value);
    let weight = parseFloat(document.getElementById('formGroupExampleInput2').value);

    // Calculando o IMC
    let imc = weight / (height * height);

    // Verificando o índice de massa corporal
    if(imc <= 18.5){
        document.getElementById('ImcResult').textContent = `Underweight`;
    }else if(imc >= 18.6 && imc <= 24.9){
        document.getElementById('ImcResult').textContent = `Normal Weight`;
    }else if(imc >= 25.0 && imc <= 29.9){
        document.getElementById('ImcResult').textContent = `Overweight`;
    }else if(imc >= 30.0 && imc <= 34.9){
        document.getElementById('ImcResult').textContent = `Obesity Class I`;
    }else if(imc >= 35.0 && imc <= 39.9){
        document.getElementById('ImcResult').textContent = `Obesity Class II`;
    }else{
        document.getElementById('ImcResult').textContent = `Obesity Class III`;
    }
}

// Função para verificar se o ano é bissexto
function Year(){
    try {
        let year = parseInt(document.getElementById('formGroupExampleInput').value);

        // Verificando se o ano é bissexto
        if (isNaN(year)) {
            throw new Error("Is not an integer number");
        }
        let result = "";
        if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            result = year + " Is Bissexto"; 
        }else{
            result = year + " Isn't Bissexto"
        }

        // Exibindo o resultado
        document.getElementById('YearResult').textContent = result;
    } catch (error) {
        console.log(error.message); 
    }
}

// Função para gerar a tabela de multiplicação
function generateTable() {
    const numero = document.getElementById('number_one_ex10').value;
    const tableContainer = document.getElementById('multiplicationTable');

    // Limpando a tabela
    tableContainer.innerHTML = "";
    
    // Verificando se o número foi informado
    if (!numero) {
        alert("Please enter a valid number.");
        return;
    }

    // Gerando a tabela de multiplicação
    for (let i = 1; i <= 10; i++) {
        const result = numero * i;
        const p = document.createElement('p');
        p.classList.add("multiplication-row");
        p.innerHTML = `<span>${numero}</span> x <span>${i}</span> = <span>${result}</span>`;
        tableContainer.appendChild(p);
    }
}

// Função para limpar a tabela de multiplicação
function again() {
    clearTable(); 
    document.getElementById('number_one_ex10').value = ''; 
}

// Função para limpar a tabela de multiplicação
function clearTable() {
    const tableContainer = document.getElementById('multiplicationTable');
    tableContainer.innerHTML = "";
}

// Função para calcular o imposto sobre valor
function Tax(){
    let ValueOriginal = Number(document.getElementById('formGroupExampleInput').value);
    let ValueConverted = Number(document.getElementById('formGroupExampleInput2').value);

    // Calculando o valor do imposto
    let Value = ValueOriginal * ValueConverted;
    document.getElementById('TaxResult').textContent = Value;
}

// Função para calcular o fatorial de um número
function Fatorial() {
    let value = Number(document.getElementById('formGroupExampleInput').value);
    
    let result = 1;
    
    // Verificando se o valor é negativo
    if (value < 0) {
        document.getElementById('FatorialResult').textContent = 'Por favor, insira um número positivo';
        return;
    }

    // Calculando o fatorial
    for (let i = 1; i <= value; i++) {
        result *= i; 
    }

    // Exibindo o resultado
    document.getElementById('FatorialResult').textContent = result;
}

// Jogo de Pedra, Papel, Tesoura
let placarJogador = 0;
let placarComputador = 0;

function jogar(escolhaJogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    let resultado = '';
    
    // Verificando o resultado do jogo
    if (escolhaJogador === escolhaComputador) {
        resultado = 'Empate!';
    } else if (
        (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = 'Você venceu!';
        placarJogador++;
    } else {
        resultado = 'Você perdeu!';
        placarComputador++;
    }

    // Verificando quem venceu
    if(placarComputador == 10 || placarJogador == 10){
        window.alert("Parabéns!");
    }

    // Atualizando o placar
    document.getElementById('placar-jogador').innerText = placarJogador;
    document.getElementById('placar-computador').innerText = placarComputador;
    document.getElementById('resultado').innerHTML = `
        <p><strong>Você escolheu:</strong> ${escolhaJogador}</p>
        <p><strong>O computador escolheu:</strong> ${escolhaComputador}</p>
        <h2>${resultado}</h2>
    `;
}
