const saludo = document.getElementById("saludo");
const botonGuardar = document.getElementById("guardarNombre");
const botonEliminar = document.getElementById("eliminarNombre");


botonGuardar.addEventListener("click", () => {
    const nombre = prompt("Ingrese su nombre:")
        localStorage.setItem("nombreUsuario", nombre)
        saludo.textContent = '¡Bienvenido ${nombre}!'
    }
)

botonEliminar.addEventListener("click", () => {
        localStorage.removeItem("nombreUsuario")
        saludo.textContent = '¡Bienvenido!'
    }
)

const nombreGuardado = localStorage.getItem("nombreUsuario")
if (nombreGuardado) {
   saludo.textContent = '¡Bienvenido ${nombreGuardado}!'
}


let contenido = document.getElementById("contenido");

// Array para almacenar los productos del carrito
let carrito = [];
let total = 0;

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
  const listaCarrito = document.getElementById('carrito');
  const totalElemento = document.getElementById('total');

  // Limpiar el contenido actual
  listaCarrito.innerHTML = '';

  // Renderizar los productos en el carrito
  carrito.forEach((producto, index) => {
    const item = document.createElement('li');
    item.textContent = `${producto.nombre} - $${producto.precio}`;
    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.onclick = () => eliminarDelCarrito(index);
    item.appendChild(botonEliminar);
    listaCarrito.appendChild(item);
  });

  // Actualizar el total
  totalElemento.textContent = total;
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(indice) {
  total -= carrito[indice].precio;
  carrito.splice(indice, 1);
  actualizarCarrito();
}

function createButton(text, callback) {

  const boton = document.createElement('button');
  boton.textContent = text;
  boton.addEventListener('click ,callback');

  return boton

}

const btn1 = createButton("Dale un click" , () => alert('funciona'))
const btn2 = createButton("Enviar" , () => alert('click en enviar'))

const root = document.getElementById('root');


