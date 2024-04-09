const nombre = document.getElementById("nombre").value;
const precio = document.getElementById("precio").value;
const descripcion = document.getElementById("descripcion").value;

const datos = {
  nombre,
  precio,
  descripcion
};

// Enviar los datos al servidor JSON-server
fetch("productos", {
  method: "post",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(datos)
})
  .then(res => res.json())
  .then(producto => {
    // Mostrar un mensaje de confirmación
    alert("Producto creado correctamente");

    // Navegar a la página de productos
    window.location.href = "productos.html";
  });
