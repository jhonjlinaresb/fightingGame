let pantalla1 = document.getElementById("fase1");
let pantalla2 = document.getElementById("fase2");
let pantalla3 = document.getElementById("fase3");

const cambioPantalla = (valor) => {

    //Ahora se a que pantalla quiero dirigirme a concatenar fase + valor
    //por parámetro
    let faseDestino = "fase" + valor;

    //A continuación creo un Array con trodas las fases
    let arrayFases = ["fase1", "fase2", "fase3"];

    arrayFases = arrayFases.filter(val => !faseDestino.includes val);

}    