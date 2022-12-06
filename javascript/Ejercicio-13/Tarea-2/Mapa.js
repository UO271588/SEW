class Mapa {
  constructor() {
    $(document).ready(this.initMap);
  }

  initMap() {
    var centro = { lat: 43.3672702, lng: -5.8502461 };
    var mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName("section")[1], {
      zoom: 10,
      mapTypeId: 'terrain',
      center: centro

    });
    mapa.map = mapaGeoposicionado;

    var tituloMapa = document.createElement("h2");
    tituloMapa.innerText = "Mapa";
    document.getElementsByTagName("section")[1].prepend(tituloMapa);
  }


  cargarGeoJson() {
    var archivos = document.getElementsByTagName("input")[0].files;
    var lector = new FileReader();
    lector.readAsText(archivos[0]);
    lector.onloadend = function () {
      var jsonparseado = JSON.parse(lector.result);
      
      for (var i = 0; i < jsonparseado.features.length; i++) {
        var coordenadas = jsonparseado.features[i].geometry.coordinates;
        const coordenada = new google.maps.Marker({
          position: {
            lat: parseFloat(coordenadas[1]),
            lng: parseFloat(coordenadas[0])
          },
          map: mapa.map
        })
      }
    }
  }
}

var mapa = new Mapa();




