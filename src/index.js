const primeraPagina =document.getElementById("paginaUno");
const segundaPagina =document.getElementById("paginaDos");
const nombre = document.getElementById("clave").value;
const confirmacion =document.getElementById("enviar");
const back = document.getElementById("Back");
//funcion cambio de pagina
primeraPagina.style.display = "block";
segundaPagina.style.display = "none";

//funcion de mi boton
confirmacion.addEventListener("click", function(){
    primeraPagina.style.display = 'none';
    segundaPagina.style.display = 'block';  
});
//funcion para regresar a la primera pagina
back.addEventListener("click",function(){
    segundaPagina.style.display="none";
    primeraPagina.style.display="block";
})


