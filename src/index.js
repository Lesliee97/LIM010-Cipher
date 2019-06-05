//variables de mis paginas
const primeraPagina =document.getElementById("paginaUno");
const segundaPagina =document.getElementById("paginaDos");

primeraPagina.style.display = "block";
segundaPagina.style.display = "none";

//variables de mis botones
const confirmacion =document.getElementById("enviar");

//funciones para cambiar de paginas
confirmacion.addEventListener("click", function(){
    const nombre = document.getElementById("name").value;
    //const username= ("Hola" + " " + nombre);
    //document.write = (username);
    primeraPagina.style.display = 'none';
    segundaPagina.style.display = 'block';
   
});