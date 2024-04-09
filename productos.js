const productos = document.getElementById("productos");

// Obtener los productos de la db.json
fetch("C:\\Users\\Admin\\Desktop\\Json-Server2\\db.json")
  .then(res => res.json())
  .then(productos => {
    // Mostrar los productos en la tabla
    productos.innerHTML = productos.map(producto => `
      <tr>
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.descripcion}</td>
        <td>${producto.marca}</td>
        <td>${producto.categoria}</td>
      </tr>
    `).join("");
  });
