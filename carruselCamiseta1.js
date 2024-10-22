const imagenes = ['https://mir-s3-cdn-cf.behance.net/project_modules/1400/03042699087485.5eeacf5845527.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3c848f99087485.5eeacbd499927.png'];

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