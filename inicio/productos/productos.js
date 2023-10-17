var productosData = [
    {   
        "id": 1,
        "name":"Empanada de Carne",
        "img":"https://cdn.pixabay.com/photo/2019/07/19/17/06/empanadas-4349223_640.jpg",
        "description":"Una deliciosa empanada rellena de carne picada, cebolla, pimiento y especias. Horneada a la perfección.",
        "price":"$50",
        "category":"aperitivos",
        "units": "800"
    },
    {
        "id": 2,
        "name": "Pizza Margarita",
        "img": "https://cdn.pixabay.com/photo/2017/07/22/22/57/pizza-2530169_640.jpg",
        "description": "Pizza clásica con salsa de tomate, mozzarella y albahaca fresca.",
        "price": "$120",
        "category": "platos principales",
        "units": "800"
    },
    {
        "id": 3,
        "name": "Pasta Carbonara",
        "img": "https://cdn.pixabay.com/photo/2015/04/08/13/13/pasta-712664_1280.jpg",
        "description": "Pasta cremosa con panceta, queso parmesano y yema de huevo.",
        "price": "$110",
        "category": "platos principales",
        "units": "800"
    },
    {
        "id": 4,
        "name": "Ensalada César",
        "img": "https://media.istockphoto.com/id/1337799015/es/foto/ensalada-c%C3%A9sar.webp?b=1&s=612x612&w=0&k=20&c=BDF6nm8YzD9BzySY7Hqs4tO0WOjo3zlFeC2qfZnxiEo=",
        "description": "Lechuga romana fresca con aderezo César, crutones y queso parmesano.",
        "price": "$80",
        "category": "ensaladas",
        "units": "800"
    },
    {
        "id": 5,
        "name": "Tiramisú",
        "img": "https://media.istockphoto.com/id/1398679790/es/foto/tarta-de-tiramis%C3%BA-sobre-plancha-de-cer%C3%A1mica-blanca.webp?b=1&s=612x612&w=0&k=20&c=bO_samOJzL-u13oXrgmKHLCwyat_jrFDIBdf19R4ITY=",
        "description": "Postre italiano con bizcochos empapados en café, queso mascarpone y cacao en polvo.",
        "price": "$70",
        "category": "postres",
        "units": "800"
    },
    {
        "id": 6,
        "name": "Vino Malbec",
        "img": "https://cdn.pixabay.com/photo/2017/06/17/18/05/wine-2412955_640.jpg",
        "description": "Vino tinto argentino de la variedad Malbec.",
        "price": "$200",
        "category": "bebidas",
        "units": "800"
    },
    {
        "id": 7,
        "name":"Milanesa Napolitana",
        "img":"https://img.freepik.com/foto-gratis/nuggets-pollo-papas-fritas-pepitas-fritas-patata-ensalada-queso-fundido_114579-138.jpg?size=626&ext=jpg",
        "description":"Milanesa de ternera cubierta con salsa de tomate, jamón y queso gratinado.",
        "price":"$150",
        "category":"platos principales",
        "units": "800"
    },
    {
        "id" : 8,
        "name" :"Empanada de Pollo",
        "img" :	"https://cdn.pixabay.com/photo/2018/08/01/21/37/empanadas-3578254_640.jpg",
        "description" :	"Empanada rellena de pollo desmenuzado, cebolla, pimiento y especias. Horneada a la perfección.",
        "price" :	"$50",
        "category" :	"aperitivos",
        "units": "800"
    },
    {
        "id" : 9,
        "name" : "Cerveza Rubia",
        "img" :	"https://img.freepik.com/foto-gratis/vista-frontal-vasos-cerveza-trigo_23-2148755010.jpg?size=626&ext=jpg&ga=GA1.2.1985346957.1696481276&semt=ais",
        "description" :	"Cerveza rubia artesanal de sabor suave y refrescante.",
        "price" : "$80",
        "category" : "bebidas",
        "units": "800"
    },
    {
        "id" : 10,
        "name" : "Gelato de Vainilla",
        "img" :	"https://img.freepik.com/foto-gratis/bolas-helado-bol_1220-571.jpg?size=626&ext=jpg&ga=GA1.1.1985346957.1696481276&semt=ais",
        "description" :	"Gelato italiano cremoso sabor vainilla.",
        "price" :	"$60",
        "category" :	"postres",
        "units": "800"
    },
    {
        "id" : 11,
        "name" : "Café Expresso",
        "img" :	"https://img.freepik.com/foto-gratis/taza-cafe-corazon-dibujado-espuma_1286-70.jpg?size=626&ext=jpg&ga=GA1.1.1985346957.1696481276&semt=ais",
        "description" :	"Café expresso fuerte y aromático.",
        "price" : "$40", 
        "category":"bebidas",
        "units": "800"
     },
    {
        "id": 12,
        "name": "Asado de Tira",
        "img": "https://img.freepik.com/foto-gratis/sebet-frito-sobre-tabla-madera_140725-4714.jpg?size=626&ext=jpg&ga=GA1.1.1985346957.1696481276&semt=ais",
        "description": "Corte de carne de res a la parrilla, típico de la gastronomía argentina.",
        "price": "$180",
        "category": "platos principales",
        "units": "800"
    },
    {
        "id": 13,
        "name": "Empanada de Jamón y Queso",
        "img": "https://media.istockphoto.com/id/152137708/es/foto/jam%C3%B3n-y-queso-empanada-primer-plano.webp?b=1&s=612x612&w=0&k=20&c=KPZB6mYxqxR0-5FrhP5Srl0IVsoBXkPko_jm09B2pF8=",
        "description": "Empanada rellena de jamón y queso derretido. Horneada a la perfección.",
        "price": "$50",
        "category": "aperitivos",
        "units": "800"
    },
    {
        "id": 14,
        "name": "Ensalada Mixta",
        "img": "https://img.freepik.com/foto-gratis/verduras-frescas-coloridas-rodajas-como-pepinos-tomates-rojos-cebolla-superficie-rustica-madera_140725-14178.jpg?size=626&ext=jpg&ga=GA1.1.1985346957.1696481276&semt=ais",
        "description": "ensalada fresca con lechuga, tomate, cebolla y zanahoria.",
        "price": "$70",
        "category": "ensaladas",
        "units": "800"
    },
    {
        "id": 15,
        "name": "Flan con Dulce de Leche",
        "img": "https://img.freepik.com/foto-gratis/postres-indulgentes-plato-amarillo-listos-comer-ia-generativa_188544-46352.jpg?size=626&ext=jpg&ga=GA1.2.1985346957.1696481276&semt=ais",
        "description": "Postre suave y cremoso de huevo y leche, servido con dulce de leche.",
        "price": "$60",
        "category": "postres",
        "units": "800"
    },
    {
        "id": 16,
        "name":"Agua Mineral",
        "img":"https://media.istockphoto.com/id/1451088545/es/foto/agua-purificada-que-se-vierte-en-un-vaso-sobre-la-roca-en-el-bosque.webp?b=1&s=612x612&w=0&k=20&c=07wtpvBqOC0ospAV2MqdukYIXq6xAtZa_MBvM_Dvcus=",
        "description":"Agua mineral natural. Opción con gas o sin gas.",
        "price":"$40",
        "category":"bebidas",
        "units": "800"
    },
    {
        "id" : 17,
        "name" :	"Empanada de Verdura",
        "img" :	"https://media.istockphoto.com/id/183029916/es/foto/empanada.webp?b=1&s=612x612&w=0&k=20&c=h1g1VFJv38XHboAa6w50agfiy6fQCzzoBwlNiX-NM24=",
        "description" :	"Empanada rellena de espinaca y queso. Horneada a la perfección.",
        "price" :	"$50",
        "category" :	"aperitivos",
        "units": "800"
    },
    {
        "id" : 18,
        "name" :	"Cerveza Negra",
        "img" :	"https://img.freepik.com/foto-gratis/cerveza-negra-espuma-pinta_53876-94399.jpg?size=626&ext=jpg&ga=GA1.1.1985346957.1696481276&semt=ais",
        "description" :	"Cerveza negra artesanal de sabor intenso y tostado.",
        "price" :	"$90",
        "category" :	"bebidas",
        "units": "800"
    },
    {
        "id" : 19,
        "name" :	"Gelato de Chocolate",
        "img" :	"https://img.freepik.com/foto-gratis/postre-helado-chocolate_144627-8363.jpg?size=626&ext=jpg&ga=GA1.2.1985346957.1696481276&semt=ais",
        "description" :	"Gelato italiano cremoso sabor chocolate.",
        "price" :	"$60",
        "category" :	"postres",
        "units": "800"
    },
    {
        "id" : 20,
        "name" :	"Café Capuchino",
        "img" :	"https://img.freepik.com/foto-gratis/taza-cafe-corazon-dibujado-espuma_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.1985346957.1696481276&semt=ais",
        "description" :	"Café capuchino con espuma de leche y una pizca de cacao en polvo.",
        "price":"$50", 
        "category":"bebidas",
        "units": "800"
    },
    {
        "id": 21,
        "name":"Milanesa a la Napolitana con Papas Fritas",
        "img":"https://img.freepik.com/foto-gratis/nuggets-pollo-papas-fritas-pepitas-fritas-patata-ensalada-queso-fundido_114579-136.jpg?size=626&ext=jpg&ga=GA1.2.1985346957.1696481276&semt=ais",
        "description":"Milanesa de ternera cubierta con salsa de tomate, jamón y queso gratinado. Acompañada con papas fritas.",
        "price":"$170", 
        "category":"platos principales",
        "units": "800"
    }
]

let datosUsuario = [
    {
        "registro": localStorage.getItem("registro"),
        "nombreDeUsuario": localStorage.getItem("nombreDeUsuario"),
        "clave": localStorage.getItem("clave")
    },
    {
        "saldo":"1000"
    }
]

const categoria = document.getElementById("categorias");
const listaCategoria = document.getElementById("lista-categorias");

categoria.addEventListener("click", ()=>{
    listaCategoria.classList.toggle("lista-categorias--abierta")
    listaCategoria.classList.toggle("lista-categorias--cerrada")
})


let productosDelCarrito = JSON.parse(localStorage.getItem("carrito"));
if (!productosDelCarrito) {
    productosDelCarrito = [];
}


const notifCarrito = document.querySelector("#num-carrito-cont>span");
let carritoValue = parseInt(localStorage.getItem("notificacion-carrito"));
if (isNaN(carritoValue) || undefined) {
    notifCarrito.textContent = "0";
} else {
    notifCarrito.textContent = carritoValue + 1;
}



const categoriaTitulo = document.getElementById("categoria-titulo")

function cargarProductos(categoriaSeleccionada){
    sectionProductos.innerHTML = ""
    categoriaSeleccionada.forEach(element => {

        // parte de adelante del producto
        var flipcard = document.createElement("div")
        flipcard.classList.add("flipcard")
        var back = document.createElement("div")
        back.classList.add("back")
        var cont = document.createElement("div");
        cont.classList.add("producto");
        cont.addEventListener("click", ()=>{

        })
        
        const nombre = document.createElement("h3");
        nombre.classList.add("nombre");
        nombre.textContent = element.name
    
        const imagen = document.createElement("img");
        imagen.classList.add("img");
        imagen.src = element.img
        
        const parrafo = document.createElement("p");
        parrafo.classList.add("descripcion");
        parrafo.textContent = element.description
        
        const precio = document.createElement("span");
        precio.classList.add("precio");
        precio.textContent = element.price

        let unidadesRestantesDOM = document.createElement("p")
        unidadesRestantesDOM.classList.add("unidades")
        let unidadesRestantes = element.units
        unidadesRestantesDOM.textContent = "quedan: " + unidadesRestantes + " unidades"
        
        cont.appendChild(imagen);
        cont.appendChild(nombre);
        cont.appendChild(precio);
        cont.appendChild(parrafo)
        flipcard.appendChild(cont)

        // parte de atras del producto

        const opcionesDeCompra = document.createElement("ul")
        const agregarAlCarro = document.createElement("li")

        
        agregarAlCarro.classList.add("agregar-al-carro")
        agregarAlCarro.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Agregar al carrito`

        const comprarAhora = document.createElement("li")

        comprarAhora.classList.add("comprar-ahora")
        comprarAhora.innerHTML = `<i class="fa-solid fa-credit-card"></i> Comprar ahora`

        // unidades a comprar

        const contadorDeUnidades = document.createElement("div");
        contadorDeUnidades.classList.add("contador");
        const masUnidades = document.createElement("span");
        masUnidades.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        const unidad = document.createElement("span");
        unidad.classList.add("unidad")
        unidad.textContent = "0"
        const menosUnidades = document.createElement("span");
        menosUnidades.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        
        masUnidades.addEventListener("click", ()=>{
            let valorActual = parseInt(unidad.textContent)
            if(valorActual < 99){
                unidad.textContent = valorActual + 1
                unidadesRestantes -= 1
                unidadesRestantesDOM.textContent = `quedan: ${unidadesRestantes} unidades`
            }
        })
        menosUnidades.addEventListener("click", ()=>{
            let valorActual = parseInt(unidad.textContent)
            if(valorActual > 0){
                unidad.textContent = valorActual - 1
                unidadesRestantes += 1
                unidadesRestantesDOM.textContent = `quedan: ${unidadesRestantes} unidades`
            }
        })
        
        contadorDeUnidades.appendChild(menosUnidades)
        contadorDeUnidades.appendChild(unidad)
        contadorDeUnidades.appendChild(masUnidades)
        back.appendChild(contadorDeUnidades)
        
        // opciones para comprar
        agregarAlCarro.addEventListener("mouseup", ()=>{
            if (datosUsuario[0].registro == "true") {
                if (parseInt(unidad.textContent) > 0) {                
                    let productoEnCarrito = {
                        id:element.id,
                        nombre:element.name,
                        img: element.img,
                        precio: element.price,
                        unidadesCompradas: parseInt(unidad.textContent) 
                    }
                
                    let index = productosDelCarrito.findIndex(producto => producto.id === productoEnCarrito.id)
                
                    if (index !== -1) {
                        productosDelCarrito[index].unidadesCompradas += productoEnCarrito.unidadesCompradas 
                    } else {
                        productosDelCarrito.push(productoEnCarrito)
                        localStorage.setItem("notificacion-carrito", parseInt(notifCarrito.textContent))
                        notifCarrito.textContent = parseInt(localStorage.getItem("notificacion-carrito")) + 1
                    }
                    
                    localStorage.setItem("carrito", JSON.stringify(productosDelCarrito))
                }
            } else {
                window.open("registro/registrarse.html", "_self")
            }
        })
        
        opcionesDeCompra.appendChild(agregarAlCarro)
        opcionesDeCompra.appendChild(comprarAhora)

        back.appendChild(opcionesDeCompra)
        back.appendChild(unidadesRestantesDOM)

        flipcard.appendChild(back)
    
        producto.appendChild(flipcard);
        sectionProductos.appendChild(producto)  
    });
}


// obteniendo todos los elementos del DOM que deben actualizarse
const body = document.getElementById("body")

const loader = document.getElementById("loader") 

const sectionProductos = document.getElementById("productos");

const producto = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", async ()=>{
    // quitar loader despues de 300 milisegundos de que haya cargado el DOM
    setTimeout(() => {
        loader.classList.add("loader-none")
    }, 300);

    // CARGA DE PRODUCTOS MEDIANTE UNA API
    // const productos = await axios("https://apimocha.com/productsfh123/products/all")
    // var productosData = productos.data
    // console.log(productosData);
    const botonesCategorias = document.querySelectorAll(".botones-categorias");
    
    botonesCategorias.forEach(boton => {
        boton.addEventListener("click", (e)=>{
            botonesCategorias.forEach(underline => {
                underline.classList.remove("underline")
            })
            e.target.classList.add("underline")
            if (e.currentTarget.id != "todos") {
                nombreParaTitulo = productosData.find(producto => producto.category === e.currentTarget.id)
                const productoDeCategoria = productosData.filter(categoria => categoria.category === e.currentTarget.id)
                console.log(nombreParaTitulo);
                categoriaTitulo.textContent = `Categoría: ${nombreParaTitulo.category}`
            cargarProductos(productoDeCategoria)
            } else {
                categoriaTitulo.textContent = "Categoría: Todos"
                cargarProductos(productosData)
            }
        })
    })

    cargarProductos(productosData)
    // dibujar producto obtenido en el DOM 
})



