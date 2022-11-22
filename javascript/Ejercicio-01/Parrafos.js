class Parrafos{
    constructor(){
        this.escribir();
    }

    escribir(){
        document.write("<p>Curso: " + cabecera.curso + "</p>")
        document.write("<p>Nombre: " + cabecera.nombre_estudiante + "</p>")
        document.write("<p>E-mail: " + cabecera.email + "</p>")
    }
}

parrafos = new Parrafos();