// funcion reloj
function muestraReloj() {
   
    var fechaHora = new Date();
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
    var day = (fechaHora.getDate());
    if (day <= 9) {
      day = '0' + day
    } 
    var month = (fechaHora.getMonth()+1); 
    if (month <= 9) {
      month = '0' + month
    } 
    var year = (fechaHora.getFullYear());
    var fecha = day +'/'+ month +'/'+ year;

    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }


    document.getElementById("reloj").innerHTML = fecha +'  '+ horas+':'+minutos+':'+segundos;
  }

    window.onload = function() {
    setInterval(muestraReloj, 1000);
  }

// funcion calificador
const selectElement = document.querySelector('.calificacion');

selectElement.addEventListener('change', (event) => {
const resultado = document.querySelector('.resultado');

resultado.textContent = `Su calificacion es ${event.target.value}`;
console.log(event.target.value);
});

function validateForm() {

  var usuario = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var telefono = document.getElementById('telefono').value;
  var mensaje = document.getElementById('mensaje').value;

  if (usuario == "") {
    var mensaje01 = " El campo Nombre no puede estar vacío"
    var labelusuario = document.getElementById('labelusuario')
    labelusuario.textContent = labelusuario.textContent + mensaje01
    labelusuario.classList.add("text-danger")
  }

  if (email == "") {
    var mensaje02 = " El campo Email no puede estar vacío"
    var labelemail = document.getElementById('labelemail')
    labelemail.textContent = labelemail.textContent + mensaje02
    labelemail.classList.add("text-danger")
  }

  if (telefono == "") {
    var mensaje03 = " El campo Telefono no puede estar vacío"
    let labeltelefono = document.getElementById('labeltelefono')
    labeltelefono.textContent = labeltelefono.textContent + mensaje03
    labeltelefono.classList.add("text-danger")
  }

  if (mensaje == "") {
    var mensaje04 = " El campo Telefono no puede estar vacío"
    let labelmensaje = document.getElementById('labelmensaje')
    labelmensaje.textContent = labelmensaje.textContent + mensaje04
    labelmensaje.classList.add("text-danger")
  }

  else (window.location.href = "mensaje.html")
}
