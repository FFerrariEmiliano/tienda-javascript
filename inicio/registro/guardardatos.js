const formulario = document.getElementById("registro-form")

if (localStorage.getItem("registro")) {
    console.log("check");
    formulario.classList.add("validado")
}

let validaciones = []

const nombreUsuario = document.getElementById("nombre");
const nombreUsuarioError = document.getElementById("nombre-error");

const clave = document.getElementById("clave");
const claveError = document.getElementById("clave-error");

const claveConfirmada = document.getElementById("clave-confirmada");
const claveConfirmadaError = document.getElementById("clave-confirmada-error");

const enviar = document.getElementById("enviar");
enviar.addEventListener("click", (e)=>{
    e.preventDefault()
    validaciones = []
    let caracteresPermitidos = /^[a-zA-Z0-9]+$/;
    if (!(caracteresPermitidos.test(nombreUsuario.value) && nombreUsuario.value.length >= 5)) {
        nombreUsuario.classList.add("incorrecto")
        nombreUsuarioError.style.opacity = 1
        validaciones.push(false)
    } else {
        nombreUsuario.classList.remove("incorrecto")
        validaciones.push(true)
    }
    
    if (!(caracteresPermitidos.test(clave.value) && clave.value.length >= 8)) {
        clave.classList.add("incorrecto")
        claveError.style.opacity = 1
        validaciones.push(false)
    } else {
        clave.classList.remove("incorrecto")
        validaciones.push(true)
    } 
    
    if (claveConfirmada.value != clave.value) {
        claveConfirmada.classList.add("incorrecto")
        claveConfirmadaError.style.opacity = 1
        validaciones.push(false)
    } else {
        claveConfirmada.classList.remove("incorrecto")
        validaciones.push(true)
    } 
    if (validaciones[0] && validaciones[1] && validaciones[2]){
        var formData = {
            "registro": true,
            "nombreDeUsuario": nombreUsuario.value,
            "clave": clave.value
        }
        localStorage.setItem("registro", formData.registro)
        localStorage.setItem("nombreDeUsuario", formData.nombreDeUsuario)
        localStorage.setItem("clave", formData.clave)
    }
    if (localStorage.getItem("registro")) {
        console.log("check");
        formulario.classList.add("validado")
    }
})


document.addEventListener("keypress", ()=>{
    nombreUsuario.classList.remove("incorrecto")
    clave.classList.remove("incorrecto")
    claveConfirmada.classList.remove("incorrecto")
    nombreUsuarioError.style.opacity = 0
    claveError.style.opacity = 0
    claveConfirmadaError.style.opacity = 0
})