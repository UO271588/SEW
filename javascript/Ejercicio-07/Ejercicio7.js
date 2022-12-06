class Ejercicio7 {
    constructor() { }

    ocultarImagen() {
        $("img").first().hide();
    }

    mostrarImagen() {
        $("img").first().show();
    }

    añadirTextoFinal() {
        $("section > p").first().append("Texto añadido despues.");
    }

    añadirTextoInicio() {
        $("section > p").first().prepend("Texto añadido antes.");
    }

    añadirParrafoDespues() {
        $("p").first().after("<p>Parrafo añadido despues</p>");
    }

    añadirParrafoAntes() {
        $("p").first().before("<p>Parrafo añadido antes</p>");
    }

    eliminarParrafo() {
        $("section > p").last().remove();
    }

    recorridoHtml() {

        $("section").last().append("<h2>Recorrido Html</h2>");

        $("*", document.body).each(function () {
            var etiquetaPadre = $(this).parent().get(0).tagName;
            var texto = document.createElement("p");
            texto.innerText = "Padre : <" + etiquetaPadre + "> Elemento : <" + $(this).get(0).tagName + ">"
            $("section").last().append(texto);
        });
    }

    sumarFilas() {

        var contador = 0;

        $("section").last().append("<h2>Suma filas</h2>");

        $("table tr").each(function () {
            if (contador != 0) {
                var total = 0;
                var hijos = $(this).children("td");
                for (var i = 0; i < hijos.length; i++) {
                    total += parseInt($(hijos[i]).text());
                }

                var fila = document.createElement("p");
                fila.innerText = "Suma Fila " + contador + ": " + total;

                $("section").last().append(fila);
            }
            contador++;
        });
    }

    sumarColumnas() {

        $("section").last().append("<h2>Suma columnas</h2>");

        var filas = $("table tr");
        var numColumnas = $(filas[1]).children("td").length;
        for (var i = 1; i <= numColumnas; i++) {
            var total = 0;
            for (var j = 0; j < filas.length; j++) {
                var columnas = $(filas[j]).children("td");
                if (columnas.length > 0) {
                    total += parseInt($($(filas[j]).children("td")[i - 1]).text());
                }
            }
            $("section").last().append("<p>Suma Columna " + i + ": " + total + "</p>");
        }
    }
}

var ej = new Ejercicio7();
