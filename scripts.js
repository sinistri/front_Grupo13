const id = document.getElementById("id");

const nombre = document.getElementById("nombre");

const apellido = document.getElementById("apellido");

const telefono = document.getElementById("telefono");

const email = document.getElementById("email");

const mensajesId = document.getElementById("mensajesId");

const mensajesNombre = document.getElementById("mensajesNombre");

const mensajesEmail = document.getElementById("mensajesEmail");

const mensajesTelefono = document.getElementById("mensajesTelefono"); 

const botonEnviar = document.getElementById("botonEnviar");

const botonBorrar = document.getElementById("botonBorrar");


const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

function validarId(){
    if(id.value.length < 2) {
        mensajesId.innerHTML = "Ingrese un ID válido";
    }
    else {
        mensajesId.innerHTML = "ID correcto!!";
    }
}

function validarNombre(){
    if(nombre.value.length < 2) {
        mensajesNombre.innerHTML = "Ingrese un Nombre válido";
    }
    else {
        mensajesNombre.innerHTML = "Nombre correcto!!";
    }
}

function validarApellido(){
    if(apellido.value.length < 2) {
        mensajesApellido.innerHTML = "Ingrese un Apellido válido";
    }
    else {
        mensajesApellido.innerHTML = "Apellido correcto!!";
    }
}

function validarEmail(){
    if(!expRegular.test(email.value)) {
        mensajesEmail.innerHTML = "El email no es valido";
    }
    else {
        mensajesEmail.innerHTML = "Email correcto!!";
    }
}

function validarTelefono(){
    if(telefono.value.length < 10) {
        mensajesTelefono.innerHTML = "Ingrese un telefono válido";
    }
    else {
        mensajesTelefono.innerHTML = "Telefono correcto!!";
    }
}


botonEnviar.addEventListener("click", validarId);

botonEnviar.addEventListener("click", validarNombre);

botonEnviar.addEventListener("click", validarApellido);

botonEnviar.addEventListener("click", validarEmail);

botonEnviar.addEventListener("click", validarTelefono);



