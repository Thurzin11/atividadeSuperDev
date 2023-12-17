const btn1 = document.querySelector('#exer1');
const btn2 = document.querySelector('#exer2');
const btn3 = document.querySelector('#exer3');
const s1 = document.querySelector('.first');
const s2 = document.querySelector('.second');
const s3 = document.querySelector('.third');


btn1.addEventListener('click', () => {
    s1.style.display = 'flex';
    s2.style.display = 'none';
    s3.style.display = 'none';
});

btn2.addEventListener('click', () => {
    s1.style.display = 'none';
    s2.style.display = 'flex';
    s3.style.display = 'none';
});

btn3.addEventListener('click', () => {
    s2.style.display = 'none';
    s1.style.display = 'none';
    s3.style.display = 'flex';
});

function somar(a, b) {
    const result = a + b;
    return result;
}

function subtrair(a, b) {
    const result = a - b;
    return result;
}

function multiplicar(a, b) {
    const result = a * b;
    return result;
}

function dividir(a, b) {
    const result = a / b;
    return result;
}

// Função Callback recebendo por referência a operação matemática que será 
// executada, e passando por parâmetro os valores dos inputs
const result = document.querySelector('#resultado');
function executarOperacao(operacao) {
    const numA = parseInt(document.getElementById('numA').value);
    const numB = parseInt(document.getElementById('numB').value);

    const resultadoFinal = operacao(numA, numB);


    result.innerHTML = `O resultado da operação é ${resultadoFinal}`;
}


const btnLogout = document.querySelector('#logout');
btnLogout.addEventListener('click', () => {
    sair();
});

function sair() {
    window.location.href = "index.html"
}

const quantidadeAsterisco = document.querySelector('#pergunta-asterisco');
const bntPiramide = document.querySelector('#gerarPiramide');
const resultDois = document.querySelector('#resultadoDois');

bntPiramide.addEventListener('click', () => {
    gerarPiramide();
});

function gerarPiramide() {
    resultDois.innerHTML = ``;
    if(quantidadeAsterisco.value>0){
        resultDois.style.background = '#2F6306';
    for (let i = 0; i < quantidadeAsterisco.value; i++) {
        for (let c = 0; c <= i; c++) {
            resultDois.innerHTML += `*`;
        }
        resultDois.innerHTML += `<br>`
    }
}else{
    resultDois.innerHTML += `Informe um valor valido`;
    resultDois.style.background = 'red';
}
}