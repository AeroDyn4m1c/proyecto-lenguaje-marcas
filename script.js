const datosEmpresa = {
  "empresa": {
    "nombre": "Molinari-Auto-ReSell",
    "CIF": "B12345678",
    "provincia": "Castellon",
    "año": 2026
  },
  "productos": [
    {
      "id": 1,
      "nombre": "Pastillas de freno",
      "categoria": "Frenos",
      "marca": "Bosch",
      "precio": 39.99,
      "stock": 100,
      "disponible": true,
      "fechaEntrada": "2026-02-01"
    },
    {
      "id": 2,
      "nombre": "Disco de freno",
      "categoria": "Frenos",
      "marca": "Brembo",
      "precio": 59.99,
      "stock": 80,
      "disponible": true,
      "fechaEntrada": "2026-03-01"
    },
    {
      "id": 3,
      "nombre": "Filtro de aceite",
      "categoria": "Filtros",
      "marca": "Mann Filter",
      "precio": 8.99,
      "stock": 300,
      "disponible": true,
      "fechaEntrada": "2026-03-01"
    },
    {
      "id": 4,
      "nombre": "Filtro de aire",
      "categoria": "Filtros",
      "marca": "Bosch",
      "precio": 12.99,
      "stock": 0,
      "disponible": false,
      "fechaEntrada": "2026-10-01"
    },
    {
      "id": 5,
      "nombre": "Filtro de combustible",
      "categoria": "Filtros",
      "marca": "Mahle",
      "precio": 14.99,
      "stock": 150,
      "disponible": true,
      "fechaEntrada": "2026-12-01"
    },
    {
      "id": 6,
      "nombre": "Batería 12V",
      "categoria": "Baterías",
      "marca": "Varta",
      "precio": 95.99,
      "stock": 45,
      "disponible": true,
      "fechaEntrada": "2026-05-01"
    },
    {
      "id": 7,
      "nombre": "Amortiguador",
      "categoria": "Suspensión",
      "marca": "Monroe",
      "precio": 65.99,
      "stock": 60,
      "disponible": true,
      "fechaEntrada": "2026-07-01"
    },
    {
      "id": 8,
      "nombre": "Correa de distribución",
      "categoria": "Motor",
      "marca": "Gates",
      "precio": 42.99,
      "stock": 0,
      "disponible": false,
      "fechaEntrada": "2026-01-01"
    },
    {
      "id": 9,
      "nombre": "Bujías",
      "categoria": "Motor",
      "marca": "NGK",
      "precio": 6.99,
      "stock": 500,
      "disponible": true,
      "fechaEntrada": "2026-03-01"
    },
    {
      "id": 10,
      "nombre": "Líquido refrigerante",
      "categoria": "Fluidos",
      "marca": "Castrol",
      "precio": 18.99,
      "stock": 200,
      "disponible": true,
      "fechaEntrada": "2026-11-01"
    }
  ]
};

// Ejercicio 1
const linkEmpresa = document.querySelector('#link-empresa');

let productosDisponibles = '';

for (let i = 0; i < datosEmpresa.productos.length; i++) {
  if (datosEmpresa.productos[i].disponible === true) {
    productosDisponibles += datosEmpresa.productos[i].nombre + '\n';
  }
}

linkEmpresa.addEventListener('click', () => {
  alert(`Empresa: ${datosEmpresa.empresa.nombre}
  CIF: ${datosEmpresa.empresa.CIF}
  Año: ${datosEmpresa.empresa.año}
  Numero total de productos: ${datosEmpresa.productos.length}
  Productos disponibles: ${productosDisponibles}`);
});



// Ejercicio 2
const linkBuscar = document.querySelector('#link-buscar');

linkBuscar.addEventListener('click', () => {
  const nombreProducto = prompt('Nombre de producto:');

  let productoEncontrado = null;

  for (let i = 0; i < datosEmpresa.productos.length; i++) {
    if (productos[i].nombre.toLowerCase() === nombreProducto.toLowerCase()) {
      productoEncontrado = datosEmpresa.productos[i];
    }
  }

  if (productoEncontrado) {
    alert(`Producto: ${productoEncontrado.nombre}
  Categoría: ${productoEncontrado.categoria}
  Marca: ${productoEncontrado.marca}
  Precio: ${productoEncontrado.precio} €
  Stock: ${productoEncontrado.stock}
  Disponible: ${productoEncontrado.disponible}`);
  } else {
    alert(`No se ha encontrado ningún producto llamado "${nombreBuscado}".`);
  }
});




// Ejercicio 3
const linkStock = document.querySelector('#link-stock');

linkStock.addEventListener('click', () => {
  const cantidadStock = prompt('Cantidad de stock:');

  let productosStockMenor = '';

  for (let i = 0; i < datosEmpresa.productos.length; i++) {
    if (datosEmpresa.productos[i].stock < cantidadStock) {
      productosStockMenor += datosEmpresa.productos[i].nombre + '\n';
    }
  }

  if (productosStockMenor.length > 0) {
    alert(`Productos con menos stock:
    ${productosStockMenor}`);
  } else {
    alert(`No se ha encontrado ningún producto con menos stock.`);
  }
});




// Ejercicio 4
const linkFechas = document.querySelector('#link-fechas');

linkFechas.addEventListener('click', () => {
  const fechaInicial = prompt('Fecha Inicial:');
  const fechaFinal = prompt('Fecha Final:');

  let productosRango = '';

  for (let i = 0; i < datosEmpresa.productos.length; i++) {
    if (datosEmpresa.productos[i].fechaEntrada >= fechaInicial && datosEmpresa.productos[i].fechaEntrada <= fechaFinal) {
      productosRango += datosEmpresa.productos[i].nombre + '\n';
    }
  }

  if (productosRango === '') {
    alert(`No hay productos con fecha de entrada entre las fechas indicadas.`);
  } else {
    alert(`Productos entre ${fechaInicial} y ${fechaFinal}:\n${productosRango}`);
  }
});




// Ejercicio 5
const linkInventario = document.querySelector('#link-inventario');

linkInventario.addEventListener('click', () => {
  let valorTotal = 0;
  let stringValorCadaProducto = '';

  for (let i = 0; i < datosEmpresa.productos.length; i++) {
    valorTotal += datosEmpresa.productos[i].precio * datosEmpresa.productos[i].stock;
    stringValorCadaProducto += 'Producto: ' + datosEmpresa.productos[i].nombre + ', valor: ' + datosEmpresa.productos[i].precio * datosEmpresa.productos[i].stock + '\n';
  }

  alert(`Valor total del inventario: ${valorTotal}
  ${stringValorCadaProducto}`);
})




// Ejercicio extra
const botonConsultar = document.querySelector('.boton-consultar');
const contenedorResultado = document.querySelector('.parte-consultar-inv');

function mostrarProductoMasCaro() {
  let productoMasCaro = datosEmpresa.productos[0];

  for (let i = 1; i < datosEmpresa.productos.length; i++) {
    if (datosEmpresa.productos[i].precio > productoMasCaro.precio) {
      productoMasCaro = datosEmpresa.productos[i];
    }
  }

  let resultado = document.querySelector('.resultado-producto');

  if (!resultado) {
    resultado = document.createElement('div');
    resultado.classList.add('resultado-producto');
    contenedorResultado.appendChild(resultado);
  }

  resultado.innerHTML = `
        <p class="texto-calculo-precio">Producto: ${productoMasCaro.nombre}</p>
        <p class="texto-calculo-precio">Categoría: ${productoMasCaro.categoria}</p>
        <p class="texto-calculo-precio">Precio: ${productoMasCaro.precio} €</p>
    `;
}

botonConsultar.addEventListener('click', mostrarProductoMasCaro);