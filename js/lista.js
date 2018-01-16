{
let init = function(){
  let cabecera = document.getElementById('cabecera');
  let contenedor = document.getElementById('buscador');
  let boton = document.getElementsByClassName("reservar");
   
  cabecera.addEventListener("click", function(){
    if(contenedor.className == "buscadorCerrado"){
      contenedor.className = "buscadorAbierto"; 
    }else{
      contenedor.className = "buscadorCerrado"; 
    }
  });

  for (let i = 0; i < boton.length; i++) {
    boton[i].addEventListener("click", function(){
      window.location.replace("detallecasas.html");
    });
  }

}
  window.onload = init;
}