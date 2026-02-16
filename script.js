// ===== CARRITO =====
let carrito = [];
let total = 0;

function agregarProducto(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarContador();
}

function actualizarContador() {
  const contador = document.getElementById("contador");
  if (contador) contador.innerText = carrito.length;
}

function abrirCarrito() {
  const modal = document.getElementById("modalCarrito");
  const lista = document.getElementById("listaCarrito");
  const totalEl = document.getElementById("total");

  lista.innerHTML = "";

  if (carrito.length === 0) {
    lista.innerHTML = "<li>No hay productos en el carrito.</li>";
  } else {
    carrito.forEach((item, index) => {
      const li = document.createElement("li");

      li.innerHTML = `
        ${item.nombre} - $${item.precio} MXN
        <button onclick="eliminarProducto(${index})" class="btn-eliminar">❌</button>
      `;

      lista.appendChild(li);
    });
  }

  totalEl.textContent = `Total: $${total} MXN`;
  modal.style.display = "block";
}

function eliminarProducto(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarContador();
  abrirCarrito(); // refresca el modal
}

function cerrarCarrito() {
  document.getElementById("modalCarrito").style.display = "none";
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarContador();
  cerrarCarrito();
}

window.addEventListener("click", (e) => {
  const modal = document.getElementById("modalCarrito");
  if (e.target === modal) cerrarCarrito();
});
