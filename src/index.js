//variables de mis paginas y botones
const primeraPagina = document.getElementById("paginaUno");
const segundaPagina = document.getElementById("paginaDos");
const terceraPagina = document.getElementById("paginaTres");
const back = document.getElementById("Back");
let contador = 0;
const enviar = document.getElementById("enviar");

//FUNCIONES  de mi cipher
let cifrar = document.getElementById("linea");// variable de mi boton de cifrar
linea.addEventListener("click", () => { 
    let string = document.getElementById("name3").value.toUpperCase();//variable de  mi input donde el user coloca la infor.
    let offset = parseInt(document.getElementById("cmp").value);// variable de mi numero de desplaamiento
    document.getElementById("cifrado").innerHTML= cipher.encode(offset,string); //variable de mi textarea 1
});

let descifrar = document.getElementById("linea2");// variable de mi boton de descifrar
 linea2.addEventListener("click",()=>{
    let string = document.getElementById("name3").value.toUpperCase(); // variable de mi input donde el user coloca infor.
    let offset = parseInt(document.getElementById("cmp").value);//variable de mi nro de desplazamiento
 document.getElementById("descifrado").innerHTML= cipher.decode(offset, string);// variable de textarea 2
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

        } else {

            terceraPagina.classList.add("hide");
            primeraPagina.classList.remove("hide");
        }
        console.log(contador);
    }
});


//back.addEventListener("click", () => {
  //  segundaPagina.style.display = "none";
  //  primeraPagina.style.display = "block";
//});