function ver(){
    let number_one_ex1 = parseFloat(document.getElementById('formGroupExampleInput').value);
    let number_two_ex1 = parseFloat(document.getElementById('formGroupExampleInput2').value);

    let diferenca = number_one_ex1 - number_two_ex1;

    if(diferenca < 0){
        let text = "Negative Number"
        document.getElementById('resultados').textContent = text;
    }
    else if(diferenca == 0){
        let text = "Not Difference"
        document.getElementById('resultados').textContent = text;
    }else{
        document.getElementById('resultados').textContent = diferenca;
    }

}


function OddEvenNumber(){
    let number_one_ex2 = parseFloat(document.getElementById('formGroupExampleInput').value);

    if(number_one_ex2 % 2 == 0 ){
        document.getElementById('OddEven').textContent = `${number_one_ex2} is a Even number`;
    }else{
        document.getElementById('OddEven').textContent = `${number_one_ex2} is a Odd number`;
    }
}


function Multiples(){
    let number_one_ex3 = parseFloat(document.getElementById('formGroupExampleInput').value);
    let number_two_ex3 = parseFloat(document.getElementById('formGroupExampleInput2').value);

    if(number_one_ex3 % number_two_ex3  == 0 ){
        document.getElementById('Multi').textContent = `${number_one_ex3} is multiple of ${number_two_ex3}`;
    }
    else{
        document.getElementById('Multi').textContent = `${number_one_ex3} is not multiple ${number_two_ex3}`;
    }
}

function CtoF(){
    let number_one_ex4 = parseFloat(document.getElementById('formGroupExampleInput').value);
    let fahrenheit = (number_one_ex4 * 9/5) + 32
    document.getElementById('Fah').textContent = `${number_one_ex4}°C is a ${fahrenheit}°F`;
}


function areaEbase(){
    let number_one_ex5 = parseFloat(document.getElementById('formGroupExampleInput').value);
    let number_two_ex5 = parseFloat(document.getElementById('formGroupExampleInput2').value);
    let area = number_one_ex5 * number_two_ex5;
    document.getElementById('a&b').textContent = area;
}


function Nota(){
    let nota1 = parseFloat(document.getElementById('formGroupExampleInput').value);
    let nota2 = parseFloat(document.getElementById('formGroupExampleInput2').value);

    let average = (nota1 + nota2) / 2; 

    if(average >= 7){
        document.getElementById('NotaResult').textContent = 'Aproved';
    }else if(average >= 5 && average < 7){
        document.getElementById('NotaResult').textContent = 'Recuperation';
    }else{
        document.getElementById('NotaResult').textContent = 'Reproved';
    }

    if(average % 2 == 0){
        document.getElementById('EvenResult').textContent = `${average} is a Even`;
    }else{
        document.getElementById('EvenResult').textContent = `${average} is a Odd`;
    }
}


function Imc(){
    let height = parseFloat(document.getElementById('formGroupExampleInput').value);
    let weight = parseFloat(document.getElementById('formGroupExampleInput2').value);

    let imc = weight/ (height * height)

    if(imc <= 18.5){
        document.getElementById('ImcResult').textContent = `Underweight`;
    }else if(imc >= 18.6 && imc <= 24.9){
        document.getElementById('ImcResult').textContent = `Normal Weight`;
    }else if(imc >= 25.0 && imc <= 29.9){
        document.getElementById('ImcResult').textContent = `Overweight`;
    }else if(imc >= 30.0 && imc <= 34.9){
        document.getElementById('ImcResult').textContent = `Obesity Class I	`;
    }else if(imc >= 35.0 && imc <= 39.9){
        document.getElementById('ImcResult').textContent = `Obesity Class II`;
    }else{
        document.getElementById('ImcResult').textContent = `Obesity Class III`;
    }
}


function Year(){
    try {
        let year = parseInt(document.getElementById('formGroupExampleInput').value);

        if (isNaN(year)) {
            throw new Error("Is not an integer number");
        }
        let result = "";
        if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            result = year + " Is Bissexto"; 
        }else{
            result = year + " Isn't Bissexto"
        }

        document.getElementById('YearResult').textContent = result;
    } catch (error) {
        console.log(error.message); 
  }
}