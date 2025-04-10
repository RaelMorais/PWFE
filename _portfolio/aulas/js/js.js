let numeros = [10, 20, 50, 70, 90, 100, 200, 400];

// Para saber os índices em um Array
for (let indice in numeros) {
    document.body.innerHTML += indice + '-';
    document.write(indice);
}

// Para ver os valores armazenados nos índices
for (let indice in numeros) {
    document.write(numeros[indice]); // Usando o índice para acessar o valor
}

numeros.forEach(function(valor){
    document.write(`<p>${valor}`)
})

//Inserir elemento no final na lista, usa o PUSH

numeros.push(60)
numeros.pop()//excluir ultimo elemento da lista 
document.write(`${numeros}<p>`)

//Funções callback: Interagir com o arrays, tratar informações e guardar o reultado em uma nova variavel array. 
 let numDobros = numeros.map(function(numeros){
    return numeros * 2
 })
document.write(`${numDobros} <p>`)
//Filter é usado para percorrer um arrays e guarda os valores correspondentes a uma condição 

let numDiv3 = numeros.filter(function(valor){
    return numeros % 3 == 0
})
document.write(`${numDiv3} <p>`)

//Find é usado para buscar um valor especifo e para no primeiro que atender os requisitos

let 