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

  
  cargarKml() {
    var archivos = document.getElementsByTagName("input")[0].files;
    var areaVisualizacion = document.getElementsByTagName("section")[2];
    var lector = new FileReader();
    lector.onload = function (evento) {
      var preparedText = document.createElement("pre");
      preparedText.innerText = lector.result;
      areaVisualizacion.append(preparedText);
    }
    lector.readAsText(archivos[0]);
    lector.onloadend = function () {
      var xmlData = $(lector.result).find("Document");
      var placeMarks = $(xmlData).find("Placemark");

      for (var i = 0; i < placeMarks.length; i++) {
        var coordenadas = $(placeMarks[i]).find("coordinates");

        var coordenadasParseadas = $(coordenadas).text().replace(/\t/g, '').split('\n')[0].split(',');

        const coordenada = new google.maps.Marker({
          position: {
            lat: parseFloat(coordenadasParseadas[1]),
            lng: parseFloat(coordenadasParseadas[0])
          },
          map: mapa.map
        })
      }
    }
  };
}

var mapa = new Mapa();


