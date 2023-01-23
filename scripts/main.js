
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
  
const selectElement = document.querySelector('.calificacion');

selectElement.addEventListener('change', (event) => {
const resultado = document.querySelector('.resultado');

resultado.textContent = `Su calificacion es ${event.target.value}`;
console.log(event.target.value);
});
