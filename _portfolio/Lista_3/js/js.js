// Desafio 1: Calculadora de duas entradas e uma operação básica
let Calcular = () => {
    let num1 = Number(document.getElementById('inputOne').value);
    let num2 = Number(document.getElementById('inputTwo').value);
    let operacao = document.getElementById('operacoes').value;
    let resultado;

    // Realiza a operação selecionada
    if (operacao === '+') {
        resultado = num1 + num2;
    } else if (operacao === '-') {
        resultado = num1 - num2;
    } else if (operacao === '*') {
        resultado = num1 * num2;
    } else if (operacao === '/') {
        resultado = num1 / num2;
    }

    // Exibe o resultado na tela
    document.getElementById('resultado').textContent = resultado;
};

// Desafio 2: Inverter uma palavra
const inverter = () => {
    let palavra = document.getElementById('inputTwo').value;

    // Inverte a palavra
    const palavraInvertida = palavra.split('').reverse().join('');

    // Mostra a palavra invertida
    document.getElementById('resultado').textContent = palavraInvertida;
};

// Desafio 3: Mostrar letra por letra com quebra de linha
const mostrar_letras = () => {
    let palavra = document.querySelector('#palavra').value;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o conteúdo anterior

    // Adiciona cada letra em uma nova linha
    palavra.split('').forEach(letra => {
        resultado.innerHTML += letra + "<br>";
    });
};

// Desafio 4: Verificar se pode dirigir com base na idade
const mostrarIdade = () => {
    let idade = Number(document.querySelector('#idade').value);

    if (idade >= 18) {
        alert("Pode dirigir");
    } else if (idade >= 13) {
        alert("Não pode dirigir");
    } else if (idade >= 0) {
        alert("Muito novo para dirigir");
    } else {
        alert("Idade inválida");
    }
};

// Desafio 5: Ordenar 3 números em ordem crescente
const verificar_numeros = () => {
    let numeros = [
        Number(document.getElementById('numero1').value),
        Number(document.getElementById('numero2').value),
        Number(document.getElementById('numero3').value)
    ];

    // Ordena os números
    numeros.sort((a, b) => a - b);

    // Exibe os números ordenados
    document.getElementById('resultado').textContent = `Números em ordem crescente: ${numeros.join(', ')}`;
};

// Desafio 6: Converter horário (hh:mm) para minutos totais
const calcular_minuto = () => {
    let horario = document.getElementById('horario').value;
    let [horas, minutos] = horario.split(':').map(Number);

    let totalMinutos = (horas * 60) + minutos;

    document.getElementById('resultado').textContent = `${horario} equivale a ${totalMinutos} minutos`;
};

// Desafio 7: Calcular quantidade de notas para determinado valor
const verificar_valor = () => {
    let valor = Number(document.getElementById('valor').value);

    const notas = {
        '200': Math.floor(valor / 200),
        '100': Math.floor((valor % 200) / 100),
        '50': Math.floor((valor % 100) / 50),
        '20': Math.floor((valor % 50) / 20),
        '5': Math.floor((valor % 20) / 5),
        '1': Math.floor((valor % 5) / 1)
    };

    // Monta a mensagem com a quantidade de notas
    let mensagem = `
        Para R$ ${valor} você precisará de:<br>
        ${notas['200']} notas de R$ 200<br>
        ${notas['100']} notas de R$ 100<br>
        ${notas['50']} notas de R$ 50<br>
        ${notas['20']} notas de R$ 20<br>
        ${notas['5']} notas de R$ 5<br>
        ${notas['1']} notas de R$ 1<br>
    `;

    document.getElementById('resultado').innerHTML = mensagem;
};

// Desafio 8: Calcular a raiz quadrada de um número
const calcular_raiz = () => {
    let numero = Number(document.getElementById('Numero').value);
    let raiz = Math.sqrt(numero);

    document.getElementById('resultado').textContent = `A raiz quadrada de ${numero} é ${raiz.toFixed(2)}`;
};

// Desafio 9: Verificar se todos os campos do formulário estão preenchidos
const verificar_cadastro = () => {
    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('endereco').value;
    let sexo = document.querySelector('input[name="sexo"]:checked');
    let telefone = document.getElementById('telefone').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;

    // Verifica se algum campo está vazio
    if (!nome || !endereco || !sexo || !telefone || !celular || !email) {
        alert('Por favor, preencha todos os dados.');
    } else {
        alert('Usuário cadastrado com sucesso!');
    }
};

// Captura o envio do formulário e executa a verificação
let formulario = document.getElementById('form');
formulario.addEventListener('submit', (ev) => {
    ev.preventDefault();
    verificar_cadastro();
});

// Desafio 10: Calcular o imposto de renda com base no salário
function calcular_imposto() {
    let salario = parseFloat(document.getElementById('salario').value);

    // Verifica a faixa do imposto
    if (salario <= 2259.20) {
        alert("Isento");
    } else if (salario <= 2826.65) {
        alert(calculo(salario, 7.5, 169.44));
    } else if (salario <= 3751.05) {
        alert(calculo(salario, 15, 381.44));
    } else if (salario <= 4664.68) {
        alert(calculo(salario, 22.5, 662.77));
    } else {
        alert(calculo(salario, 27.5, 896));
    }
}

// Função auxiliar para cálculo de imposto de renda
function calculo(salario, aliquota, parcela) {
    let desconto = (salario * aliquota) / 100;
    return `Você deverá pagar R$ ${(desconto - parcela).toFixed(2)} de IR`;
}

// Desafio 11: Calcular o valor de INSS com base no salário
const calcular_inss = () => {
    let salario = parseFloat(document.getElementById('aliquota_inss').value);

    if (salario <= 1518) {
        alert(calculo_matematico(salario, 7.5));
    } else if (salario <= 2793.88) {
        alert(calculo_matematico(salario, 9));
    } else if (salario <= 4190.83) {
        alert(calculo_matematico(salario, 12));
    } else {
        alert(calculo_matematico(salario, 14));
    }
};

// Função auxiliar para cálculo de INSS
function calculo_matematico(salario, aliquota) {
    let desconto = (salario * aliquota) / 100;
    return `Você deverá pagar R$ ${desconto.toFixed(2)} de INSS`;
}

// Desafio 12: Calcular montante com juros compostos
const calcular_juros = () => {
    let capital = parseFloat(document.getElementById('capital_inicial').value);
    let taxa = parseFloat(document.getElementById('taxa_juros').value) / 100;
    let tempo = parseInt(document.getElementById('periodos').value);

    // Fórmula dos juros compostos
    let montante = capital * Math.pow((1 + taxa), tempo);

    document.getElementById('resultado').textContent = `Montante final: R$ ${montante.toFixed(2)}`;
};

// Desafio 13: Calcular parcela com juros simples
const calcular_parcela = () => {
    let capital = parseFloat(document.getElementById('capital_inicial').value);
    let taxa = parseFloat(document.getElementById('taxa_juros').value) / 100;
    let tempo = parseInt(document.getElementById('periodos').value);

    // Fórmula da parcela: valor final dividido pelo número de períodos
    let parcela = (capital * (1 + (taxa * tempo))) / tempo;
    let total = parcela * tempo;

    document.getElementById('resultado').textContent = `Parcela: R$ ${parcela.toFixed(2)} | Total: R$ ${total.toFixed(2)}`;
};
