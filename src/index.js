//variables de mis paginas y botones
const primeraPagina = document.getElementById("paginaUno");
const segundaPagina = document.getElementById("paginaDos");
let contador = 0;
const error = document.getElementById("error");
const user = document.getElementById("user");//variable de mi input
const offset = document.getElementById("cmp");// variable de mi offset
const cifrado = document.getElementById("cifrado");//variable de mi textarea1
//variable de mis botones
const enviar = document.getElementById("enviar");
const btnclear = document.getElementById("back");
let cifrar = document.getElementById("linea");
let descifrar = document.getElementById("linea2");

//funcione de mi cipher // cifrar
cifrar.addEventListener("click", () => {
    let string = document.getElementById("user").value.toUpperCase();//variable de  mi input "nombre"
    let offset = parseInt(document.getElementById("cmp").value);// variable de mi numero de desplaamiento
   document.getElementById("cifrado").innerHTML = cipher.encode(offset, string); //variable de mi textarea 1
});
//descifrar
descifrar.addEventListener("click", () => {
    let string = document.getElementById("user").value.toUpperCase(); // variable de mi input "nombre".
    let offset = parseInt(document.getElementById("cmp").value);//variable de mi nro de desplazamiento
   document.getElementById( "cifrado").innerHTML = cipher.decode(offset, string);// variable de textarea 1
});
//funcion de mi log in 
enviar.addEventListener("click", (event) => {
    event.preventDefault();
    const clave = document.getElementById("clave").value;

    if (clave === "LABORATORIA") {
        primeraPagina.classList.add("hide");
        segundaPagina.classList.remove("hide");
    } else {
        contador = contador + 1;
        error.innerHTML = "Upss contraseña incorrecta"
        if (contador === 3) {
        error.innerHTML = "Lo sentimos, ya no puede ingresar"
      }
    }
});

btnclear.addEventListener("click", () => {
    user.value = null;
    cifrado.innerHTML = null;
    offset.value = null;
})