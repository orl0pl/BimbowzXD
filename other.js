
timer();

function timer(){
 var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var sec = currentTime.getSeconds()
var time = currentTime.toLocaleDateString();
if (minutes < 10){
    minutes = "0" + minutes
}
if (sec < 10){
    sec = "0" + sec
}
var t_str = hours + ":" + minutes + ":" + sec + " ";
if(hours > 11){
    t_str += "PM";
} else {
   t_str += "AM";
}
 document.getElementById('clock').innerHTML = t_str+'<br>'+time;
 setTimeout(timer,1000);
}
window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "\o/";
  
    (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    return confirmationMessage;                            //Webkit, Safari, Chrome
  });
//TODO: Add app picker and game