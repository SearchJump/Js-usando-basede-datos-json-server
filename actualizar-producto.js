const id = document.getElementById("id").value;
const nombre = document.getElementById("nombre").value;
const precio = document.getElementById("precio").value;
const descripcion = document.getElementById("descripcion").value;

const datos = {
  id,
  nombre,
  precio,
  descripcion
};

// Enviar los datos al servidor JSON-server
fetch(`productos/${id}`, {
  method: "put",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(datos)
})
  .then(res => res.json())
  .then(producto => {
    // Mostrar un mensaje de confirmación
    alert("Producto actualizado correctamente");

    // Navegar a la página de productos
    window.location.href = "productos.html";
  });
