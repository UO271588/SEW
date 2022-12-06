/**
 *  Numero máximo de peticiones de la API = 100;
 *  Conversion de moneda a Oro
 *  Peticion cambio Oro a otras monedas
 * 
 * 
 */


class Gold{

    constructor(){
        this.api_key = "f69c9665d6be18f3ac5bc607879bc8ef";
        this.url_api = "https://api.metalpriceapi.com/v1/latest";
        this.base = "&base=XAU";
        this.currencies = "&currencies=EUR,USD,XAG";
        this.error = "Error"
        this.datos = null;
    }

    /**
     * Metodo que devuelve el precio del Oro para 
     */
    getGold(){
        $.ajax({
            dataType: "json",
            url: this.url_api + "?api_key=" + this.api_key + this.base + this.currencies,
            method: 'GET',
            success: function(data){
                gold.datos = data;
                gold.mostrarDatos();
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
         * success: true
         * base: "XAU"
         * timestamp: long
         * rates:{
         *        "EUR": float,
         *        "USD": float,
         *        "XAG": float,
         *       }
         */

        var html_tiempo = "";
        html_tiempo += "<h1>Precios Obtenidos</h1>";
        html_tiempo += "<p>Ultima Actualización: " + new Date(this.datos.timestamp *1000).toLocaleTimeString() + "</p>";
        html_tiempo += "<p>1 oz GOLD ==> "+ this.datos.rates.USD +" USD</p>";
        html_tiempo += "<p>1 oz GOLD ==> "+ this.datos.rates.EUR +" EUR</p>";
        html_tiempo += "<p>1 oz GOLD ==> "+ this.datos.rates.XAG +" oz SILVER</p>";

        $("section:nth-child(2)").html(html_tiempo);
    }
}

var gold = new Gold();