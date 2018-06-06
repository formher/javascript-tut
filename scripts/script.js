
function calcResult() {
  var a = document.getElementById('myinput1').value;
  var b = document.getElementById('myinput2').value;
  var result = Number(a) + Number(b);
  document.getElementById('resultField').textContent = "Result is: " + result;
}

function clearRslt(){
  document.getElementById('resultField').textContent = "";

}
