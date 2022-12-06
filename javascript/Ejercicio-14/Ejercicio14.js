class Pintar{
    pantallacompleta(){
        var elem = document.getElementsByTagName("canvas")[0];
            if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }    
    }
    cargarArchivo(){
        var canvas = document.getElementsByTagName("canvas")[0];
        var canvas1 = canvas.getContext('2d');
        canvas1.clearRect(0, 0, document.width, document.height);
        canvas1.width  = 500;
        canvas1.height = 500;
        var archivos = document.getElementsByTagName("input")[0].files;
        var lector = new FileReader();      
        lector.readAsText(archivos[0]);
        lector.onloadend = function(){
            var jsonparseado = JSON.parse(lector.result);
            var elementos = jsonparseado.elements;
            for(var i = 0; i<elementos.length; i++){
                var tipo = elementos[i].geometry.type;
                var color = elementos[i].geometry.color;
                if(tipo == "Cuadrado"){
                    var coordenadas = elementos[i].geometry.coordinates;
                    canvas1.fillStyle = "rgba("+color[0] +","+color[1] +", "+color[2] +", "+color[3] +")";
                    canvas1.fillRect(coordenadas[0], coordenadas[1], coordenadas[2],coordenadas[3]);
                }else if(tipo == "Circulo"){
                    var coordenadas = elementos[i].geometry.coordinates;
                    canvas1.fillStyle = "rgba("+color[0] +","+color[1] +", "+color[2] +", "+color[3] +")";
                    canvas1.beginPath();
                    canvas1.arc(coordenadas[0],coordenadas[1], coordenadas[2], coordenadas[3], Math.PI * coordenadas[4], true);
                    canvas1.closePath();
                    canvas1.fill();
                }else if(tipo == "Triangulo"){
                    var coordenadas = elementos[i].geometry.coordinates;
                    canvas1.fillStyle = "rgba("+color[0] +","+color[1] +", "+color[2] +", "+color[3] +")";
                    canvas1.beginPath();
                    canvas1.moveTo(coordenadas[0],coordenadas[1]);
                    canvas1.lineTo(coordenadas[2],coordenadas[3]);
                    canvas1.lineTo(coordenadas[4],coordenadas[5]);
                    canvas1.closePath();
                    canvas1.fill()
                }
            }
        }
    }
}

var pintar = new Pintar();