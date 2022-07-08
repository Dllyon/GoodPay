import userLogin from "./moduloDados.js";
const alertaLogin = new bootstrap.Modal('#alertaLogin');
const entrarUsuario = document.getElementById("btnEntrar");

entrarUsuario.addEventListener("click", _event =>{
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;
  let validaLogin = userLogin.find(userLogin => userLogin.userName === login);
  if(login === validaLogin.userName && senha === validaLogin.senha) {
    window.location.pathname="/app.html";
  }else{
    alertaLogin.show();
  }
});


// percorra o vetor e identifique se existe (user e senha) filtre o vetor e encontre os dados do user e senha
//output working.


