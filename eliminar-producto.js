const id = document.getElementById("id").value;

// Enviar el ID al servidor JSON-server
fetch(`api/productos/${id}`, {
  method: "delete"
})
  .then(res => {
    // Mostrar un mensaje de confirmación
    alert("Producto eliminado correctamente");

    // Navegar a la página de productos
    window.location.href = "productos.html";
  });
