var usuarioNome;
var usuarioEmpresa;
var usuarioEmail;

function setup(){
 var config = {
  apiKey: "AIzaSyD5_4QYX3AYXD6zY2DT0NaqUmFyzx2Hqio",
  authDomain: "assignment1-2e119.firebaseapp.com",
  databaseURL: "https://assignment1-2e119.firebaseio.com",
  projectId: "assignment1-2e119",
  storageBucket: "",
  messagingSenderId: "278448539127"
};

usuarioNome = document.querySelector("#nome");
usuarioEmpresa = document.querySelector("#empresa");
usuarioEmail = document.querySelector("#email");

firebase.initializeApp(config);
database = firebase.database();

};

function submitX(){

  event.preventDefault();

  var envio = {
    nome: usuarioNome.value,
    empresa: usuarioEmpresa.value,
    email: usuarioEmail.value
  }

  var ref = database.ref('formulario');
  ref.push(envio);

  alert("Mensagem Enviada com Sucesso!"); 
}

function validar() {
  var nome = form1.nome.value;
  var empresa = form1.empresa.value;
  var email = form1.email.value;

  if (nome.length < 5) {
    alert('Digite seu nome completo');
    form1.nome.focus();
    return false;
  }

  if (empresa == "") {
    alert('Preencha o campo com sua empresa');
    form1.empresa.focus();
    return false;
  }

  if (email == "") {
    alert('Preencha o campo com seu email');
    form1.email.focus();
    return false;
  }
}
