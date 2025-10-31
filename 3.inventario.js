// Ejercicio 3: Buscar Producto en Inventario
// - Sistema de gestión de inventario.
// Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, 
// o null si no. El inventario debería estar PREDEFINIDO 
// ejemplo: 
// const inventario = [
//   { nombre: "Camisa", precio: 20 },
//   { nombre: "Zapatos", precio: 50 }
// ];

//Hacer el array de objetos, Inventario

const inventario = [
    {nombre: "Zapatos", precio: 90},
    {nombre: "Pantalón", precio: 70},
    {nombre: "Camisa", precio: 50}
]

function buscarProducto(nombre, inventario) {

  for (let i = 0; i < inventario.length; i++) {
    let producto = inventario[i]; 
    
    // 4️⃣ Verificar si el nombre coincide
    if (producto.nombre === nombre) {
      console.log("Producto encontrado:", producto);
      return producto; // salir
    }
  }
  console.log("Producto no encontrado.");
  return null;
}

// Probar 
buscarProducto("Camisa", inventario);   // encontrado
buscarProducto("Saco", inventario);    // no encontrado
buscarProducto("Zapatos", inventario);  // encontrado