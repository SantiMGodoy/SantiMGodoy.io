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


function validar(){
    let errorflag=false;
    const nombre = document.getElementById('nombre');
    const mail=document.getElementById('email');
    const numero= document.getElementById('telefono');
    const validemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validtel= /^(?:\+?54\s?)?\d{10}$/;


    if(nombre.value == "" ||nombre.value.length >30  ){
        const nombreerror=document.getElementById('error-nombre');
        nombreerror.style.display="block";
        nombre.style.borderColor="red"
        errorflag=true;
    }

    if(!validtel.test(numero.value)){
        const numeroerror=document.getElementById('error-telefono');
        numeroerror.style.display="block";
        numeroerror.style.borderColor="red";
        errorflag=true;
    }

    if(!validemail.test(mail.value)){
        const emailerror = document.getElementById('error-email');
        emailerror.style.display = "block";
        
        errorflag = true;
        mail.style.borderColor="red"
    }


    if(!errorflag){
        const resultado= document.getElementById('resenas');
        let reseña = document.createElement('h3');
        reseña.innerHTML=`${usuario.value} dice que ${peli.value} tiene una puntuacion de ${punto.value}`;
        resultado.appendChild(reseña)
       usuario.value="";
       peli.value="";
       punto.value="";     
       resultado.style.display="block";


    }else if(!errorflag && mail.value !=="" ){
        const resultado= document.getElementById('resenas');
        let reseña = document.createElement('h3');
        reseña.innerHTML=`${usuario.value} dice que ${peli.value} tiene una puntuacion de ${punto.value}. <br> contacto: ${mail.value}`;
        resultado.appendChild(reseña)
       usuario.value="";
       peli.value="";
       punto.value="";    
       mail.value=""; 
       resultado.style.display="block";


    }




return false;

}

function limpiarError(event){
    let error = event.target.nextSibling;
    error.style.display='none';
    event.target.style.borderColor = "black";

}

