console.log("Init time changer..")
var clock = document.getElementById('time_view');
var afternoon = null;
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? 'AM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  if (seconds < 10) { seconds = "0" + seconds }
  var strTime = hours + ':' + minutes + ":" + seconds +' ' + ampm;
  return strTime;
}

function Watch() {
  var date = new Date();
  clock.innerHTML = formatAMPM(date);
  setTimeout("Watch()", 1000);
}
Watch();
