function agregarEventos(){
    var botonOrigen = document.getElementsByTagName("button")[0];
    var botonExtincion = document.getElementsByTagName("button")[1];
    var btnrestaurar = document.getElementsByTagName("button")[2];
        
        botonOrigen.addEventListener("click", modificarTextoOrigen);
        botonExtincion.addEventListener("click", modificarTextoExtincion);
        btnrestaurar.addEventListener("click",restaurar); 
    
}
agregarEventos();

function aparecerParrafo() {
   parrafoOrigen.style.visibility = "hidden";
}

function modificarTextoOrigen(){
  var parrafoOrigen = document.getElementsByTagName("p")[0];

    if(parrafoOrigen.style.visibility === "hidden"){
      parrafoOrigen.style.visibility = "visible";
    }else{
      parrafoOrigen.style.visibility = "hidden";
    }
}

function modificarTextoExtincion(){
  var parrafoExtincion = document.getElementsByTagName("p")[1];
  
    if(parrafoExtincion.style.visibility === "hidden"){
    parrafoExtincion.style.visibility = "visible";
  }else{
    parrafoExtincion.style.visibility = "hidden";
  }
}

function cerrarFotosDePandas(){
    var cerrar= document.getElementsByTagName("span");
    
      [].forEach.call(cerrar,function(elemento){
        elemento.addEventListener("click",cerrarFoto)
      });
}
cerrarFotosDePandas();

function cerrarFoto(){
  var imgPanda = this.parentElement;
  imgPanda.style.display = "none";
}

function restaurar(){
    var cerrar= document.getElementsByTagName("span");
    
        for(var i = 0; i<cerrar.length; i++){
            cerrar[i].parentElement.style.display = "flex";
        }
}