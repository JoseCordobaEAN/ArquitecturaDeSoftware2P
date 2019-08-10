/*********

Crear la funcion de calcular y la lógica del boton

**********/

var sumatoria = function (n) {
    "use strict";
    return n * (n + 1) / 2;
};

var sumatoriaRango = function(inferior, superior){
    "use strict";
    return sumatoria(superior) - sumatoria(inferior);
}

var boton = document.getElementById("btnCalcular");
boton.onclick = function () {
    "use strict";
    let respuesta = document.getElementById("resultado");
    let valorInferior = document.getElementById("numeroInferior").value;
    let valorSuperior = document.getElementById("numeroSuperior").value;
    let resultado = sumatoriaRango(parseInt(valorInferior) -1 , parseInt(valorSuperior));
    respuesta.innerHTML = resultado;
};
