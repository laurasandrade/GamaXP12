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

}

function msg(){

    $("#form-contato").keyup(function(){

    if($("#form-contato").val()==''){
      $("#enviaform").attr("disabled", true);
      alert("Mensagem Enviada com Sucesso!"); 
    }else{
      $("#enviaform").attr("disabled", false);
    }
  });
}


