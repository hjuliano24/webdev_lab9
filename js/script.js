function init(){
//add your javascrip between these two lines of code
  document.getElementById("entrybutton").addEventListener("click", function() {
  var entry = document.getElementById("entryinput");
  document.getElementById("textoutput").innerHTML = entry.value;
  alert("Hailie Jade Juliano: " + entry.value);
}, false);
  
}

window.addEventListener('load', init);
