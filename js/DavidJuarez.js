var grupoTarjeta1 = ["🐶", "🐺", "🐱","🐵","💥", "🦧", "🐷","🐪","🦒","🦏","🦛","🐹","🦔","🐨","🐼","🦡","🐣"];
var grupoTarjeta2 = ["🐶", "🐺", "🐱","🐵","💥", "🦧", "🐷","🐪","🦒","🦏","🦛","🐹","🦔","🐨","🐼","🦡","🐣"];

var todasLasTarjetas = grupoTarjeta1.concat(grupoTarjeta2);

function crearTajetas() {
  var mesa = document.querySelector("#mesa");

  todasLasTarjetas.forEach(function mensaje(Element) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML = "<p class='icon'>" + Element + "</p>";

    mesa.appendChild(tarjeta);
  });
}

crearTajetas();

document.querySelector(".a").foreach(function(elemento){
  elemento.addEventListener("click", descubrircarta)
}
);

function descubrircarta(){
  this.classLIst("descubrir")
}
