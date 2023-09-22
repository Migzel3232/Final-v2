
const imagenes = document.querySelectorAll('.ImagenCasa img');


imagenes.forEach((imagen) => {
  imagen.addEventListener('click', () => {
    
    const imagenExpandida = document.createElement('div');
    imagenExpandida.classList.add('ImagenExpandida');
    const imagenClonada = imagen.cloneNode(true);
    imagenExpandida.appendChild(imagenClonada);

    
    document.body.appendChild(imagenExpandida);

    
    imagenExpandida.addEventListener('click', () => {
      document.body.removeChild(imagenExpandida);
    });
  });
});




$(document).ready(main);

var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 

		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}

	});

};