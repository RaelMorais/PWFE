// Exercício 1: Mostra o dobro de valores pré-definidos
document.addEventListener('DOMContentLoaded', function() {
    // Garante que o DOM esteja carregado antes de adicionar o listener
    document.getElementById("meuBotao").addEventListener("click", function() {
        const valores = [1, 2, 3, 4, 5]; // Vetor fixo para simplicidade
        
        console.log("Valores originais e seus dobros:");
        for (let i = 0; i < valores.length; i++) {
            // Exibe cada valor e seu dobro em uma linha para fácil leitura
            console.log(`Original: ${valores[i]}, Dobro: ${valores[i] * 2}`);
        }
        
        // Alerta o usuário para verificar o console
        window.alert("Ver no console o resultado.");
    });
});

// Exercício 2: Calcula a média de 8 valores informados pelo usuário
function calcularMedia() {
    const valores = []; // Array para armazenar os números
    
    // Solicita 8 valores e valida a entrada
    for (let i = 0; i < 8; i++) {
        const entrada = prompt(`Digite o ${i + 1}º valor:`);
        const valor = parseFloat(entrada);
        
        if (isNaN(valor)) {
            alert("Por favor, digite apenas números válidos!");
            return; // Aborta se a entrada não for numérica
        }
        
        valores.push(valor);
    }
    
    // Usa reduce para somar de forma concisa
    const soma = valores.reduce((acumulador, atual) => acumulador + atual, 0);
    const media = soma / valores.length;
    
    console.log(`A média aritmética dos valores é: ${media.toFixed(2)}`);
    alert("Por favor, verifique o resultado no console do navegador!");
}

// Exercício 3: Identifica idades acima da média entre 20 entradas
function calcularIdades() {
    const idades = [];
    let soma = 0;

    // Coleta 20 idades com validação básica
    for (let i = 0; i < 20; i++) {
        const idade = parseFloat(prompt(`Digite a ${i + 1}ª idade:`));
        if (isNaN(idade) || idade < 0) {
            alert("Digite uma idade válida!");
            return; // Impede idades negativas ou inválidas
        }
        idades.push(idade);
        soma += idade; // Acumula para calcular a média depois
    }

    const media = soma / 20;
    // Filtra idades maiores que a média
    const acimaMedia = idades.filter(idade => idade > media);

    console.log(`Média das idades: ${media.toFixed(2)}`);
    console.log("Idades acima da média:", acimaMedia);
    alert("Verifique os resultados no console!");
}

// Exercício 4: Exibe números pares entre 10 entradas
function verificarPares() {
    const numeros = [];

    // Lê 10 números com validação
    for (let i = 0; i < 10; i++) {
        const num = parseFloat(prompt(`Digite o ${i + 1}º número:`));
        if (isNaN(num)) {
            alert("Digite um número válido!");
            return;
        }
        numeros.push(num);
    }

    // Filtra apenas os números pares
    const pares = numeros.filter(num => num % 2 === 0);
    
    console.log(pares.length === 0 
        ? "Todos os números são ímpares." 
        : "Números pares:", pares);
    alert("Verifique os resultados no console!");
}

// Exercício 5: Armazena 8 números entre 100 e 200
function validarNumeros() {
    const numeros = [];

    // Garante que os valores estejam no intervalo especificado
    for (let i = 0; i < 8; i++) {
        const num = parseFloat(prompt(`Digite o ${i + 1}º número (entre 100 e 200):`));
        if (isNaN(num) || num < 100 || num > 200) {
            alert("Valor inválido! Digite um número entre 100 e 200.");
            return;
        }
        numeros.push(num);
    }

    console.log("Valores armazenados:", numeros);
    alert("Verifique os resultados no console!");
}

// Exercício 6: Busca um nome em uma lista pré-definida
function buscarNome() {
    // Lista fixa de nomes para busca
    const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", 
                  "Fernanda", "Gabriel", "Helena", "Igor", "Julia"];
    const nomeBuscado = prompt("Digite um nome para buscar:");

    const indice = nomes.indexOf(nomeBuscado);
    
    console.log(indice !== -1 
        ? `Nome encontrado na posição ${indice}` 
        : "Nome não encontrado!");
    alert("Verifique o resultado no console!");
}

// Exercício 7: Busca nome com limite de 5 tentativas
function buscarNomeLimitado() {
    const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", 
                  "Fernanda", "Gabriel", "Helena", "Igor", "Julia"];
    
    // Limita a busca a 5 tentativas
    for (let tentativa = 1; tentativa <= 5; tentativa++) {
        const nome = prompt(`Tentativa ${tentativa}/5 - Digite um nome para buscar:`);
        const indice = nomes.indexOf(nome);
        
        if (indice !== -1) {
            console.log(`Nome encontrado na posição ${indice} na tentativa ${tentativa}`);
            alert("Verifique o resultado no console!");
            return; // Encerra ao encontrar
        }
        
        if (tentativa === 5) {
            console.log("Nome não encontrado após 5 tentativas!");
            alert("Verifique o resultado no console!");
        }
    }
}

// Exercício 8: Cria vetor B com metade dos valores de A
function calcularVetores() {
    const vetorA = [];
    const vetorB = [];

    // Lê 6 números inteiros e calcula a metade imediatamente
    for (let i = 0; i < 6; i++) {
        const num = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`));
        if (isNaN(num)) {
            alert("Digite um número inteiro válido!");
            return;
        }
        vetorA.push(num);
        vetorB.push(num / 2); // Metade de cada valor
    }

    console.log("Vetor A:", vetorA);
    console.log("Vetor B (metade de A):", vetorB);
    alert("Verifique os resultados no console!");
}

// Exercício 9: Alterna valores de A e B em um vetor C
function alternarVetores() {
    const vetorA = [];
    const vetorB = [];
    const vetorC = [];

    // Coleta 5 números para vetor A
    for (let i = 0; i < 5; i++) {
        const num = parseInt(prompt(`Digite o ${i + 1}º número para vetor A:`));
        if (isNaN(num)) {
            alert("Digite um número inteiro válido!");
            return;
        }
        vetorA.push(num);
    }

    // Coleta 5 números para vetor B
    for (let i = 0; i < 5; i++) {
        const num = parseInt(prompt(`Digite o ${i + 1}º número para vetor B:`));
        if (isNaN(num)) {
            alert("Digite um número inteiro válido!");
            return;
        }
        vetorB.push(num);
    }

    // Alterna os valores de A e B em C
    for (let i = 0; i < 5; i++) {
        vetorC.push(vetorA[i]);
        vetorC.push(vetorB[i]);
    }

    console.log("Vetor A:", vetorA);
    console.log("Vetor B:", vetorB);
    console.log("Vetor C (alternado):", vetorC);
    alert("Verifique os resultados no console!");
}