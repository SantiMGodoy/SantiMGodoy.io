const imagenes = ['https://mir-s3-cdn-cf.behance.net/project_modules/1400/d1e4dc99217993.604acd15e8484.png',
    'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/087d3499217993.604acd15e6c65.png'];

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