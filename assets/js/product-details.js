const main = document.querySelector('#productos');

function cargarProductos() {
    fetch('../assets/data/productos.json')
        .then(respuesta => respuesta.json())
        .then(Productos => {
            Productos.forEach(producto => {


                const title = document.querySelector('#titulo-details');
                title.innerHTML = producto.nombre

                const descripcion = document.querySelector('#descripcion-details');
                descripcion.innerHTML = producto.desc


         
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error :-' + error.message))
}

cargarProductos();



