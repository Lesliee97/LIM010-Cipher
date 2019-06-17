//variables de mis paginas y botones
const primeraPagina = document.getElementById("paginaUno");
const segundaPagina = document.getElementById("paginaDos");
let contador = 0;

const cifrado = document.getElementById("cifrado");//variable de mi textarea1
//const descifrado = document.getElementById("descifrado");
const name3 = document.getElementById("name3");//variable de mi input
const offset = document.getElementById("cmp");
//variable de mis botones
const enviar = document.getElementById("enviar");
const btnclear = document.getElementById("back");

//FUNCIONES  de mi cipher
let cifrar = document.getElementById("linea");// variable de mi boton de cifrar
cifrar.addEventListener("click", () => {
    let string = document.getElementById("name3").value.toUpperCase();//variable de  mi input donde el user coloca la infor.
    let offset = parseInt(document.getElementById("cmp").value);// variable de mi numero de desplaamiento
    document.getElementById("cifrado").innerHTML = cipher.encode(offset, string); //variable de mi textarea 1
});

let descifrar = document.getElementById("linea2");// variable de mi boton de descifrar
descifrar.addEventListener("click", () => {
    let string = document.getElementById("name3").value.toUpperCase(); // variable de mi input donde el user coloca infor.
    let offset = parseInt(document.getElementById("cmp").value);//variable de mi nro de desplazamiento
    document.getElementById("cifrado").innerHTML = cipher.decode(offset, string);// variable de textarea 2
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
        document.getElementById("error").innerHTML = "Upss contraseña incorrecta"
        if (contador === 3) {
            document.getElementById("error").innerHTML = "Lo sentimos, ya no puede ingresar"

        }

    }
});

btnclear.addEventListener("click", () => {
    name3.value = null;
    cifrado.innerHTML = null;
    offset.value = null;
})