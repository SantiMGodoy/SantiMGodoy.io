
    const formulario= document.getElementById('formulario-1');
    let errorflag=false;
    const nombre = document.getElementById('nombre');
    const mail=document.getElementById('email');
    const numero= document.getElementById('telefono');
    const validemail = /^[\w-]{4,}@(\w+)\.(com|edu(\.ar)?|org|gov)$/;
    const validtel= /^(?:\+?54\s?)?\d{10}$/;





formulario.addEventListener('submit' , function(evento){
    evento.preventDefault();
    errorflag=false;
    

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
        const div= document.getElementById('porfavoranda');
        const nombrediv= document.getElementById('nombre-usuario');
        const telefonodiv=document.getElementById('telefono-divloco');
        const mail1=document.getElementById('correo-span');
        console.log(div);
        nombrediv.textContent=nombre.value;
        telefonodiv.textContent=telefono.value;
        console.log(mail.value);
        mail1.textContent=mail.value;
        console.log('entro al if');
        div.style.display="block";
        

    }




return false;
});

function limpiarError(event){
    let error = event.target.nextSibling;
    error.style.display='none';
    event.target.style.borderColor = "black";

}
