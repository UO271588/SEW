
class MapaDinamico{
  constructor(){
      $(document).ready(this.initMap);
  }
  
  initMap(){  
    var hospitales = [["HUCA",43.379748113890436, -5.829068307459341],["Hospital Monte Naranco",43.37251615721199, -5.877083411969422],
                    ["Hospital Valle del Nalon",43.331538162053405, -5.723132334064699],["Hospital Alvarez Buylla",43.26380217681854, -5.760922629703135],
                    ["Hospital Universitario de Cabueñes",43.53291853251785, -5.605455342066495],["Sanatorio de Begoña",43.54084649938439, -5.648445788169716],
                    ["Hospital Cruz Roja",43.5427599903929, -5.655610862520252], ["Fundación Hospital Jove",43.55505955388558, -5.703503727915945],
                    ["Fundacion Hospital de Aviles",43.55690698935326, -5.925134332464905],["Hospital Universitario San Agustin",43.55424031028663, -5.93827600540598]];
    var centro = {lat: 43.3672702, lng: -5.8502461};
    var mapaGeoposicionado = new google.maps.Map(document.getElementsByTagName("section")[0],{
        zoom: 10,
        center:centro,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var act = this;
    var infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            infoWindow.setPosition(pos);
            infoWindow.setContent('Tu Posición');
            infoWindow.open(mapaGeoposicionado);
            mapaGeoposicionado.setCenter(pos);
            
            for(var i = 0; i< hospitales.length; i++){
              var pos = {
                lat: hospitales[i][1],
                lng: hospitales[i][2]
              };
              var marker = new google.maps.Marker({
                position: pos,
                title: hospitales[i][0],
                label: 'H'
              });
              marker.setMap(mapaGeoposicionado);
            }
          }, function() {
            handleLocationError(true, infoWindow, act.mapaGeoposicionado.getCenter());
          });
        } else {
          handleLocationError(false, infoWindow, act.mapaGeoposicionado.getCenter());
        }
      }

      handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: Ha fallado la geolocalización' :
                              'Error: Su navegador no soporta geolocalización');
        infoWindow.open(mapaGeoposicionado);
      }

      cargarHospitalesAsturiasCentro(){
   
        
    }
  }
    var mapaDinamico = new MapaDinamico();


