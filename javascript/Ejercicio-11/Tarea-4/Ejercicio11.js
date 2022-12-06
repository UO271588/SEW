class MapaDinamico {
    constructor() {
        $(document).ready(this.initMap);
    }

    initMap() {
        var oviedo = { lat: 43.3672702, lng: -5.8502461 };
        var mapaOviedo = new google.maps.Map(document.getElementsByTagName("section")[0], { zoom: 8, center: oviedo });
        var marcador = new google.maps.Marker({ position: oviedo, map: mapaOviedo });
        
        var tituloMapa = document.createElement("h2");
        tituloMapa.innerText = "Mapa";
        document.getElementsByTagName("section")[0].prepend(tituloMapa);
    }
}

var mapaDinamico = new MapaDinamico();