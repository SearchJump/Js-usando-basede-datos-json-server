const productos = document.getElementById("productos");

// Obtener los productos del servidor JSON-server
fetch("api/productos")
  .then(res => res.json())
  .then(productos => {
    // Mostrar los productos en la tabla
    productos.innerHTML = productos.map(producto => `
      <tr>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.descripcion}</td>
      </tr>
    `).join("");
  });

// Eventos de los enlaces
productos.addEventListener("click", e => {
  if (e.target.tagName === "A") {
    const enlace = e.target;
    const id = enlace.getAttribute("href").split("/")[2];

    // Navegar a la página correspondiente
    window.location.href = enlace.href;
  }
});
