
class MapaDinamico {
  constructor() {
    $(document).ready(this.initMap);
  }

  initMap() {
    var centro = { lat: 43.3672702, lng: -5.8502461 };
    var mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName("section")[0], {
      zoom: 10,
      center: centro,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        infoWindow.setContent('Tu Posición');
        infoWindow.open(mapaGeoposicionado);
        mapaGeoposicionado.setCenter(pos);
      }, function () {
        handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
      });
    } else {
      handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
    }

    var tituloMapa = document.createElement("h2");
    tituloMapa.innerText = "Mapa";
    document.getElementsByTagName("section")[0].prepend(tituloMapa);
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: Ha fallado la geolocalización' :
      'Error: Su navegador no soporta geolocalización');
    infoWindow.open(mapaGeoposicionado);
  }


}

var mapaDinamico = new MapaDinamico();