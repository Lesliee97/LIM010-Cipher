//variables de mis paginas y botones
const primeraPagina = document.getElementById("paginaUno");
const segundaPagina = document.getElementById("paginaDos");
const terceraPagina = document.getElementById("paginaTres");
const back = document.getElementById("Back");
let contador = 0;
const enviar = document.getElementById("enviar");

//variables de mi cipher
let cifrar = document.getElementById("cifrar");
let result1 = document.getElementById("result1");
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let descifrar = document.getElementById("descifrar");
let result2 = document.getElementById("result2");

const btncifrar = document.getElementById("linea");
const btndescifrar = document.getElementById("linea2");

//funcion de mi log in 
enviar.addEventListener("click", (event) => {
    event.preventDefault();
    const clave = document.getElementById("clave").value;

    if (clave === "LABORATORIA") {
        primeraPagina.classList.add("hide");
        segundaPagina.classList.remove("hide");
    }else {
        contador = contador + 1;
        document.getElementById("error").innerHTML = "Upss contraseña incorrecta"
        if (contador === 3) {
            document.getElementById("error").innerHTML = "Lo sentimos, ya no puede ingresar"
        
        }else {
            
       terceraPagina.classList.add("hide");
       primeraPagina.classList.remove("hide");
    }
    console.log(contador);
    }
});


back.addEventListener("click", () => {
    segundaPagina.style.display = "none";
    primeraPagina.style.display = "block";
});