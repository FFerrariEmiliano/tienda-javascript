const irAlCarrito = document.getElementById("carrito")

irAlCarrito.addEventListener("click", ()=>{
    if (localStorage.getItem("registro") == "true") {
        window.open("carrito/carrito.html", "_self")
        localStorage.setItem("notificacion-carrito", -1)
    } else {
        window.open("registro/registrarse.html", "_self")
    }
})