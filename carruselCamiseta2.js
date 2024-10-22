const imagenes = ['https://acdn.mitiendanube.com/stores/002/332/223/products/marcadaguasitefrente891-8b6eec665889ebb80716654630857447-640-0.jpg',
    'https://pbs.twimg.com/ext_tw_video_thumb/1513876737884573714/pu/img/R0UoSgLnFIxQzIMg.jpg'];

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