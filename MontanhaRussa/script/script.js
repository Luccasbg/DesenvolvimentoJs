const button = document.getElementById("btn");
button.addEventListener("click", verificar);

function verificar(){
    const campoIdade = document.getElementById("idade");
    const campoAltura = document.getElementById("altura");
    
   	if(campoIdade.value >= 21 || campoAltura.value > 150){
    	console.log("Você pode brincar na montanha russa!")
    }
    
    else if(campoIdade.value < 21 || campoAltura.value < 150){
    	console.log("Você não pode brincar na montanha russa!");
    }
}