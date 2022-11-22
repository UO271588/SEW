class InfoNavegador{
    constructor(){
        this.obtenerInformacion();
    }

    obtenerInformacion(){
        this.nombre = navigator.appName;
        this.idioma = navigator.language;
        this.version = navigator.appVersion;
        this.plataforma = navigator.platform;
        this.javaActivo = navigator.javaEnabled();
    }
}

var info = new InfoNavegador();