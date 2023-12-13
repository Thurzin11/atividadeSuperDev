
const user = [
        {
                login: 'arthur',
                senha: '2935'
        },
        {
                login: 'jonathan',
                senha: 'gostoso'
        }
]


const btnLogin = document.querySelector('#botaoLogin');
const login = document.querySelector('#login');
const password = document.querySelector('#password');


btnLogin.addEventListener('click', ()=>{
        verificarUser();
});

function verificarUser(){
        let contador = 0;
        user.forEach((cont) => {
                if(cont.login == login.value && cont.senha == password.value){
                        alert('Login feito');
                        window.location.href = "main.html"
                        contador++;
                }
        });
        if(contador == 0){
                alert('O login falhou')
        }
}