
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  invia();
});
function invia(){
  let checkbox=document.getElementById("check");
  let emailbox=document.getElementById("emailtext");
  let passwordbox=document.getElementById("passwordtext");
  let usernamebox=document.getElementById("username");
  let email=document.getElementById("email").value;
  let password=document.getElementById("pwd").value;
  let username=document.getElementById("user").value;
  if(checkbox.checked){
    document.getElementById("container").style.display="none";
    emailbox.innerText+=email;
    passwordbox.innerText+=password;
    usernamebox.innerText+=username;
  }else{
    let errore=document.getElementById("errore");
    errore.style.color="red";
    errore.innerHTML="se non accetti i termini non possiamo rubarti i dati";
  }
  
 

}