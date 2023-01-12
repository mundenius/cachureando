
function muestraReloj() {
    var fechaHora = new Date();
    var horas = fechaHora.getHours()
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
    var fecha = fechaHora.getFullYear()+'/'+(fechaHora.getMonth()+1)+'/'+fechaHora.getDate();
   

    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
  
    document.getElementById("reloj").innerHTML = fecha+'  '+ horas+':'+minutos+':'+segundos;
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