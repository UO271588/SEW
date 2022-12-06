/**
 *  Comentarios y aportaciones importantes a la hora de crear el codigo
 *  Links Iconos Estilo:
 *  https://openweathermap.org/img/w/xxxx.png
 * 
 *  Clave OpenWeatherMap:
 *  e4acce415326fa1d006a844350e739ae
 */


class Weather{

    constructor(){
        this.api_key = "e4acce415326fa1d006a844350e739ae";
        this.url_api = "http://api.openweathermap.org/data/2.5/weather?q=";
        this.unidades = "&units=metric";
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
    getWeather(ciudad){
        $.ajax({
            dataType: "json",
            url: this.url_api + ciudad + this.unidades + this.idioma + "&APPID=" + this.api_key,
            method: 'GET',
            success: function(data){
                weather.datos = data;
                weather.mostrarDatos();
            },
            error: function(){
                //Modificar para que se muestre un error personalizado para la ciudad seleccionada
                document.write(this.error);             
            }
        });
    }

    mostrarDatos(){
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

        var html_tiempo = "";
        //Primero a mostrar: Nombre de la ciudad
        html_tiempo += "<h2>" + this.datos.name + "</h2>\n";
        //Segundo a mostrar: Icono del tiempo
        html_tiempo += "<img src=\"" + this.raiz_link_icono + this.datos.weather[0].icon + ".png\">";
        html_tiempo += "<p>Descripción: " + this.datos.weather[0].description + "</p>";
        
        html_tiempo += "<h3>Datos Atmosfericos</h3>";
        html_tiempo += "<p>Temperatura: " + Math.round(this.datos.main.temp) + "°C</p>";
        html_tiempo += "<p>Sensación Térmica: " + Math.round(this.datos.main.feels_like) + "°C</p>";
        html_tiempo += "<p>Temperatura Máxima: " + Math.round(this.datos.main.temp_max) + "°C</p>";
        html_tiempo += "<p>Temperatura Mínima: " + Math.round(this.datos.main.temp_min) + "°C</p>";
        html_tiempo += "<p>Presión atmosferica: " + Math.round(this.datos.main.pressure) + " mb</p>";
        html_tiempo += "<p>Humedad: " + Math.round(this.datos.main.humidity) + "%</p>";
        html_tiempo += "<p>Nubosidad: " + this.datos.clouds.all + "%</p>";
        
        html_tiempo += "<h3>Viento</h3>";
        html_tiempo += "<p>Velocidad: " + this.datos.wind.speed + "m/s</p>";
        html_tiempo += "<p>Dirección: " + this.datos.wind.deg + "°</p>";
        html_tiempo += "<p>Rachas: " + this.datos.wind.gust + "m/s</p>";

        html_tiempo += "<h3>Salida y Puesta del Sol</h3>";
        html_tiempo += "<p>Salida: " + new Date(this.datos.sys.sunrise *1000).toLocaleTimeString() + "</p>";
        html_tiempo += "<p>Puesta: " + new Date(this.datos.sys.sunset *1000).toLocaleTimeString() + "</p>";

        html_tiempo += "<h3>Datos Geográficos y de Medición</h3>";
        html_tiempo += "<p>Longitud: " + this.datos.coord.lon + "</p>";
        html_tiempo += "<p>Latitud: " + this.datos.coord.lat + "</p>";
        html_tiempo += "<p>Hora de medición: " + new Date(this.datos.dt *1000).toLocaleTimeString() + "</p>";
        html_tiempo += "<p>Día de medición: " + new Date(this.datos.dt *1000).toLocaleDateString() + "</p>";
        html_tiempo += "<p>Zona Horaria: " + this.datos.timezone + "</p>";

        $("section:nth-child(2)").html(html_tiempo)
    }
}

var weather = new Weather();