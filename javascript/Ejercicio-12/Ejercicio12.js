class CargaArchivos {
    constructor() {
        this.tipoTexto = /text.*/;
        this.tipoJson = /application.json/
    }

    visualizarArchivos() {
        var archivos = document.getElementsByTagName("input")[0].files;

        var archivo = archivos[0];

        var texto = "<h2>Datos del archivo</h2>"
        texto += "<p> Nombre del archivo:" + archivo.name + "</p>";
        texto += "<p> Tamaño del archivo:" + archivo.size + "</p>";
        texto += "<p> Tipo del archivo:" + archivo.type + "</p>";
        texto += "<p> Ultima modificación:" + archivo.lastModifiedDate + "</p>";

        if (archivos[0].type.match(this.tipoTexto) || archivos[0].type.match(this.tipoJson)) {
            var lector = new FileReader();
            lector.onload = function (evento) {
                document.getElementsByTagName("section")[0].innerHTML = texto; 

                var nombreContenido = document.createElement("p");
                nombreContenido.innerText = "Contenido del archivo de texto: ";
                document.getElementsByTagName("section")[0].appendChild(nombreContenido);

                console.log(lector.result);
                for(let elem in lector.result.split(/[\n\r]/)){
                    if(lector.result.split(/[\n\r]/)[elem] != ""){
                        var contenido= document.createElement("pre");
                        contenido.innerText= lector.result.split(/[\n\r]/)[elem];
    
                        document.getElementsByTagName("section")[0].appendChild(contenido);
                    }
                }
            }
            lector.readAsText(archivos[0]);
            
        }else{
            texto += "<p> Contenido del archivo de texto: </p>" 
            texto += "<p> Error ¡¡¡ Archivo no valido para leer contenido </p>"
            document.getElementsByTagName("section")[0].innerHTML = texto; 
        }        
    }
}

var carga = new CargaArchivos();