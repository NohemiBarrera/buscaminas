var numero1=document.getElementById("numero1");
var numero2=document.getElementById("numero2");
var bomba=document.getElementById("bomba");
var vacio=document.getElementById("vacio");
var documento=document.getElementById("documento");
var tabla=document.getElementById("tabla");

numero1.addEventListener("click", numerito1);
numero2.addEventListener("click", numerito2);
bomba.addEventListener("click", mina);
vacio.addEventListener("click", nada);
//tabla.addEventListener("click", tabla);
//documento.addEventListener("click", seguirJugando);

function numerito1(){
	numero1.style.backgroundColor="orange";
}

function numerito2(){
	numero2.style.backgroundColor="blue";
}

function mina(){
	alert("¡Esto ha explotado!");
}

function nada(){
	vacio.style.backgroundColor="pink";
}

/*function seguirJugando(){
	alert("Sigue jugando =^._.^=");
}*/

function disable(){
	document.getElementbyId("tabla").disabled = true;
}