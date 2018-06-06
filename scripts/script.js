
function calcResult() {
  var a = document.getElementById('myinput1').value;
  var b = document.getElementById('myinput2').value;
  var result = a + b;
  document.getElementById('resultField').textContent = +a + +b;
}

function clearRslt(){
  document.getElementById('resultField').textContent = "";

}
