let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirmaremail = document.querySelector("#confirmaremail");
let password = document.querySelector("#senha");

console.log(nome);

localStorage.setItem("nome",nome.value);
localStorage.setItem("email",email.value);
localStorage.setItem("confirmaremail",email.value);
localStorage.setItem("senha",senha.value);

  if(localStorage.nome){
 Div.style.display = "none";
 TextDecoder.innerHTML=`Seja bem Vindo ${localStorage.nome}`;   
 }
 else{
 form.style.display="block";
Section.style.display="none";

function cadastrar(){ 
     localStorage.setItem("nome",caixatexto.value);
  if(localStorage.nome){
     form.style.display="none";
     Section.style.display="block";
     texto.innerHTML=`seja bem vindo ${localStorage.nome}`;
     naosou.innerHTML=`trocar ${localStorage.nome}`;

     }
  }
}
 function limparstorange(){
     localStorage.clear();
}
