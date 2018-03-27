var usuarioNome;
var usuarioEmpresa;
var usuarioEmail;
var erro = validacampos;

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
}


function msg(){
  alert("Mensagem Enviada com Sucesso!"); 
  // document.form-contato.reset();
}

