const main = document.querySelector('#productos');

function cargarProductos() {
    fetch('../assets/data/productos.json')
        .then(respuesta => respuesta.json())
        .then(Productos => {
            Productos.forEach(producto => {

                const card = document.createElement('div');
                card.classList = 'col-lg-6 col-md-6 portfolio-item isotope-item filter-' + producto.tipo;

                const div2 = document.createElement('div');
                div2.classList = 'portfolio-content h-100';

                const img = document.createElement('img');
                img.src = "../assets/img/portfolio/" + producto.imagenes[0].url
                img.classList = 'img-fluid imagen';

                const div3 = document.createElement('div');
                div3.classList = 'portfolio-info';

                const name = document.createElement('h4');
                name.innerHTML = producto.nombre

                const p = document.createElement('p');
                p.innerHTML = "Lorem ipsum, dolor sit amet consecteturhhh"

                const a1 = document.createElement('a');
                a1.href = "assets/img/portfolio/app-3.jpg";
                a1.title = "Stand tipo 1";
                a1.setAttribute("data-gallery", "portfolio-gallery-app");
                a1.classList = 'glightbox preview-link';

                const icon1 = document.createElement('i');
                icon1.classList = 'bi bi-zoom-in';
        
                const a2 = document.createElement('a');
                a2.href = "portfolio-details.html";
                a2.title = "More Details";
                a2.classList = 'details-link';
                a2.setAttribute("onclick", "window.location='../portfolio-details.html'; localStorage.setItem('producto' , '" + producto.id + "')");


                const icon2 = document.createElement('i');
                icon2.classList = 'bi bi-link-45deg';

                main.appendChild(card);


                card.appendChild(div2);
                div2.appendChild(img);
                div2.appendChild(div3);

                div3.appendChild(name);
                div3.appendChild(p);
                div3.appendChild(a1);
                a1.appendChild(icon1);
                div3.appendChild(a2);
                a2.appendChild(icon2);

         
            });
        }) // Aquí mostramos dicha información
        .catch(error => console.log('Hubo un error :-' + error.message))
}

cargarProductos();



