const imagenes = ['imagenes/imagen9zventa.png', 'imagenes/imagen9z.png', 'imagenes/imagen9zventa2.png'];
let indice=0;

function mostrarImagen() {
    document.getElementById('imagen-carrusel').src = imagenes[indice];
}

function siguienteImagen(){
   if(indice == imagenes.length -1){
        indice=0;
        mostrarImagen();
   }else{
    indice ++;
    mostrarImagen();
   }
    
    
    
}

function anteriorImagen(){
    if(indice == 0){
        indice= imagenes.length -1;
        mostrarImagen();
   }else{
    indice --;
    mostrarImagen();
   }
    
}
mostrarImagen();




