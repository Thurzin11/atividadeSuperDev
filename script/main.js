
const user = [
        {
                login: 'arthur',
                nome: 'Arthur Santos Goncalves',
                senha: '2935'
        },
        {
                login: 'jonathan',
                nome: 'Jonathan Silveira',
                senha: '1999'
        },
        {
                login: 'pedro',
                nome: 'Pedro Artur Furtado',
                senha: '1959'
        }
]


const btnLogin = document.querySelector('#botaoLogin');
const login = document.querySelector('#login');
const password = document.querySelector('#password');


btnLogin.addEventListener('click', () => {
        verificarUser(login,password);
});

function verificarUser(login,password) {
        let contador = 0;
        user.forEach((cont) => {
                if (cont.login == login.value && cont.senha == password.value) {
                        alert('Login feito');
                        window.location.href = "main.html";

                        contador++;
                }
        });
        if (contador == 0) {
                alert('O login falhou')
        }
}

let inputPass = document.getElementById('password');
let btnShowPass = document.getElementById('btn-password');
let btnClosePass = document.getElementById('btn-text');
btnShowPass.addEventListener('click', () => {
        showPassword();
})
btnClosePass.addEventListener('click', () => {
        showPassword();
})
function showPassword() {

        if (inputPass.type === 'password') {
                inputPass.setAttribute('type', 'text');
                btnShowPass.style.display = 'none';
                btnClosePass.style.display = 'flex';
        } else {
                if (inputPass.type === 'text') {
                        inputPass.setAttribute('type', 'password');
                        btnShowPass.style.display = 'flex';
                        btnClosePass.style.display = 'none';
                }
        }
}



