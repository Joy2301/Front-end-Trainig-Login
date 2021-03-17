//Inicializo la libreria del slider y le doy las propiedades necesarias
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel-lista'), {
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel-indicadores',
        arrows: {
            next: '.carousel-control--siguiente'
        }
    });
});
