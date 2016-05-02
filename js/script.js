function textSwitcher() {
  //write one phrase then wait, then remove, then write other, wait, remove, repeat

while (true) {


}


  switch1();
  setTimeout(switch2, 2000);

}

function switch1() {
  var parent = document.getElementById("roles");
  var child = document.getElementById("deltaText");
  var para = document.createElement("deltaText");
  var node = document.createTextNode("roles 1");
  para.appendChild(node);
  parent.replaceChild(para,child);
}

function switch2() {
  var parent = document.getElementById("roles");
  var child = document.getElementById("deltaText");
  var para = document.createElement("deltaText");
  var node = document.createTextNode("roles 2");
  para.appendChild(node);
  parent.replaceChild(para,child);
}

//setInterval(textSwitcher, 1000);

var text = "new text";
document.getElementById("deltaText").innerHTML = text;
