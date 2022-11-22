class MasInfoNavegador {
    constructor(){
        this.escribir();
    }

    escribir(){
        //Version
        document.write("Version: " + info.version + "</p>");
        //Plataforma
        document.write("<p>Plataforma: " + info.plataforma + "</p>");
        //JavaActivo
        document.write("<p>Java Activo: " + info.javaActivo);
    }
}

var mas = new MasInfoNavegador();
