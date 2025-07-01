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



