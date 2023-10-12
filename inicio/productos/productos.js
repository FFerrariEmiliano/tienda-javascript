var productosData = [
    {   
        "id": 1,
        "name":"Empanada de Carne",
        "img":"https://cdn.pixabay.com/photo/2019/07/19/17/06/empanadas-4349223_640.jpg",
        "description":"Una deliciosa empanada rellena de carne picada, cebolla, pimiento y especias. Horneada a la perfección.",
        "price":"$50",
        "category":"appetizers",
        "units": "800"
    },
    {
        "id": 2,
        "name": "Pizza Margarita",
        "img": "https://cdn.pixabay.com/photo/2017/07/22/22/57/pizza-2530169_640.jpg",
        "description": "Pizza clásica con salsa de tomate, mozzarella y albahaca fresca.",
        "price": "$120",
        "category": "main-courses",
        "units": "800"
    },
    {
        "id": 3,
        "name": "Pasta Carbonara",
        "img": "https://cdn.pixabay.com/photo/2015/04/08/13/13/pasta-712664_1280.jpg",
        "description": "Pasta cremosa con panceta, queso parmesano y yema de huevo.",
        "price": "$110",
        "category": "main-courses",
        "units": "800"
    },
    {
        "id": 4,
        "name": "Ensalada César",
        "img": "https://media.istockphoto.com/id/1337799015/es/foto/ensalada-c%C3%A9sar.webp?b=1&s=612x612&w=0&k=20&c=BDF6nm8YzD9BzySY7Hqs4tO0WOjo3zlFeC2qfZnxiEo=",
        "description": "Lechuga romana fresca con aderezo César, crutones y queso parmesano.",
        "price": "$80",
        "category": "salad",
        "units": "800"
    },
    {
        "id": 5,
        "name": "Tiramisú",
        "img": "https://media.istockphoto.com/id/1398679790/es/foto/tarta-de-tiramis%C3%BA-sobre-plancha-de-cer%C3%A1mica-blanca.webp?b=1&s=612x612&w=0&k=20&c=bO_samOJzL-u13oXrgmKHLCwyat_jrFDIBdf19R4ITY=",
        "description": "Postre italiano con bizcochos empapados en café, queso mascarpone y cacao en polvo.",
        "price": "$70",
        "category": "desserts",
        "units": "800"
    },
    {
        "id": 6,
        "name": "Vino Malbec",
        "img": "https://cdn.pixabay.com/photo/2017/06/17/18/05/wine-2412955_640.jpg",
        "description": "Vino tinto argentino de la variedad Malbec.",
        "price": "$200",
        "category": "drinks",
        "units": "800"
    },
    {
        "id": 7,
        "name":"Milanesa Napolitana",
        "img":"https://img.freepik.com/foto-gratis/nuggets-pollo-papas-fritas-pepitas-fritas-patata-ensalada-queso-fundido_114579-138.jpg?size=626&ext=jpg",
        "description":"Milanesa de ternera cubierta con salsa de tomate, jamón y queso gratinado.",
        "price":"$150",
        "category":"main-courses",
        "units": "800"
    },
    {
        "id" : 8,
        "name" :"Empanada de Pollo",
        "img" :	"https://cdn.pixabay.com/photo/2018/08/01/21/37/empanadas-3578254_640.jpg",
        "description" :	"Empanada rellena de pollo desmenuzado, cebolla, pimiento y especias. Horneada a la perfección.",
        "price" :	"$50",
        "category" :	"appetizers",
        "units": "800"
    },
    {
        "id" : 9,
        "name" : "Cerveza Rubia",
        "img" :	"https://img.freepik.com/foto-gratis/vista-frontal-vasos-cerveza-trigo_23-2148755010.jpg?size=626&ext=jpg&ga=GA1.2.1985346957.1696481276&semt=ais",
        "description" :	"Cerveza rubia artesanal de sabor suave y refrescante.",
        "price" : "$80",
        "category" : "drinks",
        "units": "800"
    },
    {
        "id" : 10,
        "name" : "Gelato de Vainilla",
        "img" :	"https://img.freepik.com/foto-gratis/bolas-helado-bol_1220-571.jpg?size=626&ext=jpg&ga=GA1.1.1985346957.1696481276&semt=ais",
        "description" :	"Gelato italiano cremoso sabor vainilla.",
        "price" :	"$60",
        "category" :	"desserts",
        "units": "800"
    },
    {
        "id" : 11,
        "name" : "Café Expresso",
        "img" :	"https://img.freepik.com/foto-gratis/taza-cafe-corazon-dibujado-espuma_1286-70.jpg?size=626&ext=jpg&ga=GA1.1.1985346957.1696481276&semt=ais",
        "description" :	"Café expresso fuerte y aromático.",
        "price" : "$40", 
        "category":"drinks",
        "units": "800"
     },
    {
        "id": 12,
        "name": "Asado de Tira",
        "img": "https://img.freepik.com/foto-gratis/sebet-frito-sobre-tabla-madera_140725-4714.jpg?size=626&ext=jpg&ga=GA1.1.1985346957.1696481276&semt=ais",
        "description": "Corte de carne de res a la parrilla, típico de la gastronomía argentina.",
        "price": "$180",
        "category": "main-courses",
        "units": "800"
    },
    {
        "id": 13,
        "name": "Empanada de Jamón y Queso",
        "img": "https://media.istockphoto.com/id/152137708/es/foto/jam%C3%B3n-y-queso-empanada-primer-plano.webp?b=1&s=612x612&w=0&k=20&c=KPZB6mYxqxR0-5FrhP5Srl0IVsoBXkPko_jm09B2pF8=",
        "description": "Empanada rellena de jamón y queso derretido. Horneada a la perfección.",
        "price": "$50",
        "category": "appetizers",
        "units": "800"
    },
    {
        "id": 14,
        "name": "Ensalada Mixta",
        "img": "https://img.freepik.com/foto-gratis/verduras-frescas-coloridas-rodajas-como-pepinos-tomates-rojos-cebolla-superficie-rustica-madera_140725-14178.jpg?size=626&ext=jpg&ga=GA1.1.1985346957.1696481276&semt=ais",
        "description": "Ensalada fresca con lechuga, tomate, cebolla y zanahoria.",
        "price": "$70",
        "category": "salad",
        "units": "800"
    },
    {
        "id": 15,
        "name": "Flan con Dulce de Leche",
        "img": "https://img.freepik.com/foto-gratis/desserts-indulgentes-plato-amarillo-listos-comer-ia-generativa_188544-46352.jpg?size=626&ext=jpg&ga=GA1.2.1985346957.1696481276&semt=ais",
        "description": "Postre suave y cremoso de huevo y leche, servido con dulce de leche.",
        "price": "$60",
        "category": "desserts",
        "units": "800"
    },
    {
        "id": 16,
        "name":"Agua Mineral",
        "img":"https://media.istockphoto.com/id/1451088545/es/foto/agua-purificada-que-se-vierte-en-un-vaso-sobre-la-roca-en-el-bosque.webp?b=1&s=612x612&w=0&k=20&c=07wtpvBqOC0ospAV2MqdukYIXq6xAtZa_MBvM_Dvcus=",
        "description":"Agua mineral natural. Opción con gas o sin gas.",
        "price":"$40",
        "category":"drinks",
        "units": "800"
    },
    {
        "id" : 17,
        "name" :	"Empanada de Verdura",
        "img" :	"https://media.istockphoto.com/id/183029916/es/foto/empanada.webp?b=1&s=612x612&w=0&k=20&c=h1g1VFJv38XHboAa6w50agfiy6fQCzzoBwlNiX-NM24=",
        "description" :	"Empanada rellena de espinaca y queso. Horneada a la perfección.",
        "price" :	"$50",
        "category" :	"appetizers",
        "units": "800"
    },
    {
        "id" : 18,
        "name" :	"Cerveza Negra",
        "img" :	"https://img.freepik.com/foto-gratis/cerveza-negra-espuma-pinta_53876-94399.jpg?size=626&ext=jpg&ga=GA1.1.1985346957.1696481276&semt=ais",
        "description" :	"Cerveza negra artesanal de sabor intenso y tostado.",
        "price" :	"$90",
        "category" :	"drinks",
        "units": "800"
    },
    {
        "id" : 19,
        "name" :	"Gelato de Chocolate",
        "img" :	"https://img.freepik.com/foto-gratis/postre-helado-chocolate_144627-8363.jpg?size=626&ext=jpg&ga=GA1.2.1985346957.1696481276&semt=ais",
        "description" :	"Gelato italiano cremoso sabor chocolate.",
        "price" :	"$60",
        "category" :	"desserts",
        "units": "800"
    },
    {
        "id" : 20,
        "name" :	"Café Capuchino",
        "img" :	"https://img.freepik.com/foto-gratis/taza-cafe-corazon-dibujado-espuma_1286-70.jpg?size=626&ext=jpg&ga=GA1.2.1985346957.1696481276&semt=ais",
        "description" :	"Café capuchino con espuma de leche y una pizca de cacao en polvo.",
        "price":"$50", 
        "category":"drinks",
        "units": "800"
    },
    {
        "id": 21,
        "name":"Milanesa a la Napolitana con Papas Fritas",
        "img":"https://img.freepik.com/foto-gratis/nuggets-pollo-papas-fritas-pepitas-fritas-patata-ensalada-queso-fundido_114579-136.jpg?size=626&ext=jpg&ga=GA1.2.1985346957.1696481276&semt=ais",
        "description":"Milanesa de ternera cubierta con salsa de tomate, jamón y queso gratinado. Acompañada con papas fritas.",
        "price":"$170", 
        "category":"main-courses",
        "units": "800"
    }
]

// 
const body = document.getElementById("body")

const loader = document.getElementById("loader") 

const SectionProducto = document.getElementById("producto-seleccionado")
const verInfoProducto = document.getElementById("producto-seleccionado__div")

const sectionProductos = document.getElementById("productos");

const producto = document.createDocumentFragment();
document.addEventListener("DOMContentLoaded", async ()=>{
    loader.classList.add("loader-none")

    // const productos = await axios("https://apimocha.com/productsfh123/products/all")
    // var productosData = productos.data
    // console.log(productosData);
    
    productosData.forEach(element => {
        var cont = document.createElement("div");
        cont.classList.add("producto");
        
        var nombre = document.createElement("h3");
        nombre.classList.add("nombre");
        nombre.textContent = element.name
        
        var imagen = document.createElement("img");
        imagen.classList.add("img");
        imagen.src = element.img
        
        var parrafo = document.createElement("p");
        parrafo.classList.add("descripcion");
        parrafo.textContent = element.description
        
        var precio = document.createElement("span");
        precio.classList.add("precio");
        precio.textContent = element.price

        var unidades = document.createElement("p")
        unidades.classList.add("unidades")
        unidades.textContent = "quedan: " + element.units + " unidades"
        
        cont.appendChild(imagen);
        cont.appendChild(nombre);
        cont.appendChild(precio);
        cont.appendChild(unidades)
        cont.appendChild(parrafo);
        
        producto.appendChild(cont);
        cont.addEventListener("click", (e)=>{
            if (e.target.className == "producto") {
                let productoParaMostrar = e.target
                mostrarProducto(productoParaMostrar)
            } else if (e.target.parentElement.className == "producto") {
                let productoParaMostrar = e.target.parentElement
                mostrarProducto(productoParaMostrar)
            }
        })
        sectionProductos.appendChild(producto)
    });
})



var mostrarProducto = (elemento)=>{
    verInfoProducto.innerHTML = "";
    SectionProducto.classList.add("deslizar-producto");
    body.classList.add("sin-scroll")
    verInfoProducto.appendChild(elemento.cloneNode(true));
}

const noMostrar = document.getElementById("nomostrar")

noMostrar.addEventListener("click", ()=>{
    body.classList.remove("sin-scroll")
    SectionProducto.classList.remove("deslizar-producto")
})