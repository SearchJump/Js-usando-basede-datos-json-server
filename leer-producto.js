const id = document.getElementById("id").value;

// Enviar el ID al servidor JSON-server
fetch(`api/productos/${id}`)
  .then(res => res.json())
  .then(producto => {
    // Mostrar los datos del producto en la consola
    console.log(producto);
  });
