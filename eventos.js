// Obtener una referencia al botón por su ID
const boton = document.getElementById("miBoton");
const div = document.getElementById("thediv");

// Agregar un evento de clic al botón
boton.addEventListener("click", function() {
  alert("Has hecho clic en el botón!");
});

div.addEventListener("click", function() {
    alert("hola soy el div!");
  });