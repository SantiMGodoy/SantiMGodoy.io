const imagenes = ['https://acdn.mitiendanube.com/stores/002/335/368/themes/rio/2-slide-1728048635508-8381649859-e4660720fc326517a569419cd167408b1728048606-1920-1920.webp?889369420','https://acdn.mitiendanube.com/stores/002/335/368/themes/rio/2-slide-1728395478852-2518524088-75d5b754b08dad0f66bfa2e8b9bf9c751728395449-1920-1920.webp?889369420','https://9z.gg/assets/home/Header.png'];
let indice=0;

function mostrarImagen() {
    document.getElementById('imagen-carrusel').src = imagenes[indice];
}

function siguienteImagen(){
    indice = (indice + 1) % imagenes.length;
    mostrarImagen();
    
}

function anteriorImagen(){
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
    
}
mostrarImagen();


function validar(){
    let errorflag=false;
    const usuario = document.getElementById('usuario');
    const peli = document.getElementById('pelicula');
    const punto=document.getElementById('punto');
    const mail=document.getElementById('email');
    const validemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if(usuario.value == "" ||usuario.value.length >10  ){
        const usererror=document.getElementById('error-usuario');
        usererror.style.display="block";
        usuario.style.borderColor="red"
        errorflag=true;
    }

    if(peli.value=="" || peli.value.length >200){
        const pelierror=document.getElementById('error-pelicula');
        pelierror.style.display="block";
        peli.style.borderColor="red"
        errorflag=true;

    }

    if(punto.value== "" || punto.value <1 || punto.value >10){
        const puntoerror=document.getElementById('error-punto')
        puntoerror.style.display="block";
        punto.style.borderColor="red"
        errorflag=true;
    }

    if(mail.value !== "" && !validemail.test(mail.value)){
        const emailerror = document.getElementById('error-email');
        emailerror.style.display = "block";
        
        errorflag = true;
        mail.style.borderColor="red"
    }


    if(!errorflag && mail.value ==""){
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