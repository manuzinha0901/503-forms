let nome = document.querySelector("nome");
let email = document.querySelector("email");
let email = document. querySelector("email");
let password =document. querySelector("senha");

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
    naoso.innerHTML=`trocar ${localStorage.nome}`;

     }
   }
}
function limparstorange(){
    localStorage.clear();
}
