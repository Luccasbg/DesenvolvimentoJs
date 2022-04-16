const body = document.getElementsByTagName("body")[0];
const h2 = document.getElementsByTagName("h2")[0];
const button = document.getElementById("btn");
button.addEventListener("click", changeMode);

function changeMode(){
  	body.classList.toggle("dark-mode");
  	h2.classList.toggle("dark-mode");
 		button.classList.toggle("dark-mode"); 
}