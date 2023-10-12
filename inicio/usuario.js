let datosUsuarios = [
    {
        "registro": localStorage.getItem("registro"),
        "nombreDeUsuario": localStorage.getItem("nombreDeUsuario"),
        "clave": localStorage.getItem("clave")
    },
    {
        "saldo":"1000"
    }
]

const carrito = document.getElementById("carrito").addEventListener("click",()=>{
    if (!datosUsuarios[0].registro) {
        window.open("registro/registrarse.html", "_blank")
    }
})
const fotoPerfil = document.getElementById("foto-perfil").addEventListener("click",()=>{
    if (!datosUsuarios[0].registro) {
        window.open("registro/registrarse.html", "_blank")
    }
})
const vender = document.getElementById("vender").addEventListener("click",()=>{
    if (!datosUsuarios[0].registro) {
        window.open("registro/registrarse.html", "_blank")
    }
})
const historial = document.getElementById("historial").addEventListener("click",()=>{
    if (!datosUsuarios[0].registro) {
        window.open("registro/registrarse.html", "_blank")
    }
})
const agregarAlCarrito = document.getElementById("agregar-al-carrito").addEventListener("mouseup",()=>{
    if (!datosUsuarios[0].registro) {
        window.open("registro/registrarse.html", "_blank")
    }
})
const comprarAhora = document.getElementById("comprar-ya").addEventListener("mouseup",()=>{
    if (!datosUsuarios[0].registro) {
        window.open("registro/registrarse.html", "_blank")
    }
})

