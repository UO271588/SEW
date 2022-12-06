/**
 *  Comentarios y aportaciones importantes a la hora de crear el codigo
 *  Links Iconos Estilo:
 *  https://openweathermap.org/img/w/xxxx.png
 * 
 *  Clave OpenWeatherMap:
 *  e4acce415326fa1d006a844350e739ae
 */


class Weather {

    constructor() {
        this.api_key = "e4acce415326fa1d006a844350e739ae";
        this.url_api = "http://api.openweathermap.org/data/2.5/weather?q=";
        this.unidades = "&units=metric";
        this.tipo = "&mode=xml";
        this.idioma = "&lang=es";
        this.raiz_link_icono = " https://openweathermap.org/img/w/";
        this.error = "Error" //Modificar para convertirlo en una alerta
        this.datos = null;
    }

    /**
     * Metodo que recibe el nombre de una ciudad y devuelve el tiempo para 
     * la ciudad solicitada
     * @param {*} ciudad 
     */
    getWeather(ciudad) {
        $.ajax({
            dataType: "xml",
            url: this.url_api + ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.api_key,
            method: 'GET',
            success: function (data) {
                weather.datos = data;
                weather.mostrarDatos();
            },
            error: function () {
                //Modificar para que se muestre un error personalizado para la ciudad seleccionada
                document.write(this.error);
            }
        });
    }

    mostrarDatos() {
        /** 
         * Datos que contiene el JSON
         * Coordenadas: coor{lon,lat}
         * TiempoIcono: weather{[{id, main, description, icon}]}
         * Tiempo: main{temp, feels_like, temp_min, temp_max, pressure, humidity}
         * Viento: wind:{speed,deg,gust} //Gust = Velocidad de las rafagas
         * Nubes: clouds{all} //Cantidad de nubes de 0 a 100%
         * Tiempo de la medicion: dt
         * Localizacion: sys{type,id, country, sunrise, sunset}
         * ZonaHoraria: timezone
         * Nombre Ciudad: name
         */

        var name = $('city', this.datos).attr("name");
        
        var icon = $('weather', this.datos).attr("icon");
        var descripcion = $('weather', this.datos).attr("value");

        var temp = $('temperature', this.datos).attr("value");
        var sens = $('feels_like', this.datos).attr("value");
        var temp_min = $('temperature', this.datos).attr("min");
        var temp_max = $('temperature', this.datos).attr("max");
        var humedad = $('humidity', this.datos).attr("value");
        var presion = $('pressure', this.datos).attr("value");
        var nubosidad = $('clouds', this.datos).attr("value");
        
        var velocidad = $('speed', this.datos).attr("value");
        var direccion = $('direction', this.datos).attr("value");
        var rachas = $('gusts', this.datos).attr("value");

        var amanecer = Date.parse($('sun', this.datos).attr("rise")) - new Date().getTimezoneOffset()*60*1000;
        var anochecer = Date.parse($('sun', this.datos).attr("set")) - new Date().getTimezoneOffset()*60*1000;

        var datetime = Date.parse($('lastupdate', this.datos).attr("value")) - new Date().getTimezoneOffset()*60*1000;
        var longitud = $('coord', this.datos).attr("lon");
        var latitud = $('coord', this.datos).attr("lat");
       
        //Creación HTML

        var html_tiempo = "";

        html_tiempo += "<h2>" + name + "</h2>\n";
        html_tiempo += "<img src=\"" + this.raiz_link_icono + icon + ".png\">";
        html_tiempo += "<p>Descripción: " + descripcion + "</p>";
        
        html_tiempo += "<h3>Datos Atmosfericos</h3>";
        html_tiempo += "<p>Temperatura: " + Math.round(temp) + "°C</p>";
        html_tiempo += "<p>Sensación Térmica: " + Math.round(sens) + "°C</p>";
        html_tiempo += "<p>Temperatura Máxima: " + Math.round(temp_max) + "°C</p>";
        html_tiempo += "<p>Temperatura Mínima: " + Math.round(temp_min) + "°C</p>";
        html_tiempo += "<p>Presión atmosferica: " + Math.round(presion) + " mb</p>";
        html_tiempo += "<p>Humedad: " + Math.round(humedad) + "%</p>";
        html_tiempo += "<p>Nubosidad: " + nubosidad + "%</p>";
        
        html_tiempo += "<h3>Viento</h3>";
        html_tiempo += "<p>Velocidad: " + velocidad + "m/s</p>";
        html_tiempo += "<p>Dirección: " + direccion + "°</p>";
        html_tiempo += "<p>Rachas: " + rachas + "m/s</p>";

        html_tiempo += "<h3>Salida y Puesta del Sol</h3>";
        html_tiempo += "<p>Salida: " + new Date(amanecer).toLocaleTimeString() + "</p>";
        html_tiempo += "<p>Puesta: " + new Date(anochecer).toLocaleTimeString() + "</p>";

        html_tiempo += "<h3>Datos Geográficos y de Medición</h3>";
        html_tiempo += "<p>Longitud: " + longitud + "</p>";
        html_tiempo += "<p>Latitud: " + latitud + "</p>";
        html_tiempo += "<p>Hora de medición: " + new Date(datetime).toLocaleTimeString() + "</p>";
        html_tiempo += "<p>Día de medición: " + new Date(datetime).toLocaleDateString() + "</p>";

        $("section:nth-child(2)").html(html_tiempo)
    }
}

var weather = new Weather();