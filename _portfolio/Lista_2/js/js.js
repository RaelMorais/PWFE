document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("meuBotao").addEventListener("click", function() {
        let vetor = [1, 2, 3, 4, 5];

        console.log("Valores originais e seus dobros:");
        for (let i = 0; i < vetor.length; i++) {
            console.log("Original: " + vetor[i] + ", Dobro: " + vetor[i] * 2);
        }

        window.alert("Ver no console o resultado.");
    });
});