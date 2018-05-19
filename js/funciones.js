
var lat = '-33.4349083';
var lon = '-70.6170132';
document.addEventListener("deviceready", onDeviceReady, false);


function showAlert(msj){
  navigator.notification.alert(
  msj,  // message
  'UNAB',   // title
  ''    // buttonName
  );
}//fin function mensaje.
// PhoneGap is ready
function onDeviceReady(){
  // Do cool things here...
  //getPosition();
  if (! SMS ) { alert( 'SMS plugin not ready' ); return; }
}

function sendSMS(){
  var fono=document.getElementById('fono').value;
  var mensajetexto=document.getElementById('mensajetexto').value;
  if(fono==''){
    showAlert('¡Debe Ingresar el Fono!');
  }
  else{
    if(mensajetexto==""){
      showAlert('¡Ingrese un texto como mensaje!');
    }
    else{
      var textoURl = "y no tengo GPS Activado,";
      if(lat != 0){
        textoURl = "https://www.google.com/maps?q="+lat+","+lon;
      }
      if (SMS){
        SMS.sendSMS(fono, mensajetexto + textoURl, function () { showAlert('Message sent successfully');}, function (e) { showAlert('Message Failed:' + e);});
      }
    }
  }
}
