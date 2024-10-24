const imagenes = ['https://acdn.mitiendanube.com/stores/002/335/368/themes/rio/2-slide-1728048635508-8381649859-e4660720fc326517a569419cd167408b1728048606-1920-1920.webp?889369420','https://acdn.mitiendanube.com/stores/002/335/368/themes/rio/2-slide-1728395478852-2518524088-75d5b754b08dad0f66bfa2e8b9bf9c751728395449-1920-1920.webp?889369420','https://9z.gg/assets/home/Header.png'];
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




