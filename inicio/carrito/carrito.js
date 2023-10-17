const loader = document.getElementById("loader");
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loader.classList.add("loader-none");
    }, 300);
});

const sectionCarrito = document.getElementById("productos-del-carrito")

const productosDelUsuario = document.createDocumentFragment()

let carritoActual = JSON.parse(localStorage.getItem("carrito"))

let totalCompletoDOM = document.getElementById("total-completo")
let totalCompleto = 0

carritoActual.forEach(element => {
    const producto = document.createElement("div")
    producto.innerHTML = `
            <div class="producto-carrito">
            <img src="${element.img}" alt="">
            <div class="nombre">
                <small>nombre</small>
                <h3>${element.nombre}</h3>
            </div>
            <div class="precio">
                <small>precio</small>
                <h3>$${parseInt(element.precio.replace("$", ""))}</h3>
            </div>
            <div class="unidades">
                <small>unidades</small>
                <h3>${element.unidadesCompradas}</h3>
            </div>
            <div class="subtotal">
                <small>subtotal</small>
                <h3>$${parseInt(element.precio.replace("$", "")) * element.unidadesCompradas}</h3>
            </div>
            <div class="eliminar">
                <button><i class="fa-solid fa-trash"></i></button>
            </div>
            </div>
    `
    totalCompleto += parseInt(element.precio.replace("$", "")) * element.unidadesCompradas
    totalCompletoDOM.textContent = `Total: ${totalCompleto}`
    sectionCarrito.appendChild(producto)
});







