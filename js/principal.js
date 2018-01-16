{
	function continuar(){
		window.location.replace("pages/listacasas.html");
	}

	document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("entrar").addEventListener("click", continuar);
    });
}