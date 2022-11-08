from xml.dom import minidom

#Leer XML

xml = minidom.parse("./red.xml")

#Recorrer XML

html = ""

html += "<!DOCTYPE html>" \
"<html lang=\"es\">\n" \
"<head>\n" \
"\t<meta charset=\"UTF-8\" />\n" \
"\t<title> UO271588-XML2HTML </title>\n" \
"\t<meta name=\"author\" content=\"Eloy Alfredo Schmidt Rodríguez\"/>\n" \
"\t<meta name=\"description\" content=\"Este documento contiene la informacion del fichero XML\"/>\n" \
"\t<meta name=\"keywords\" content=\"XML, HTML, red social, persona\" />\n" \
"\t<meta name=\"viewport\" content=\"width=device-width, intial-scale=1.0\" />\n" \
"\t<link rel=\"stylesheet\" type=\"text/css\" href=\"estilo.css\" />\n"
"</head>\n"

personas = xml.getElementsByTagName("persona")

html += "<body>\n" \
"\t<h1> Red Social </h1>\n"

contador = 0

for persona in personas:
    
    contador += 1

    nombre = persona.getElementsByTagName("nombre")[0].firstChild.data
    apellidos = persona.getElementsByTagName("apellidos")[0].firstChild.data
    fechadenacimiento = persona.getElementsByTagName("fechanacimiento")[0].firstChild.data
    lugarnacimiento = persona.getElementsByTagName("lugarnacimiento")[0].getElementsByTagName("lugar")[0].firstChild.data
    coordenadasnacimiento = persona.getElementsByTagName("lugarnacimiento")[0].getElementsByTagName("coordenadas")[0]
    lugarresidencia = persona.getElementsByTagName("lugarresidencia")[0].getElementsByTagName("lugar")[0].firstChild.data
    coordenadasresidencia= persona.getElementsByTagName("lugarresidencia")[0].getElementsByTagName("coordenadas")[0]
    fotografias = persona.getElementsByTagName("fotografias")[0].getElementsByTagName("url")
    videos_elem = persona.getElementsByTagName("videos")
    comentarios = persona.getElementsByTagName("comentarios")[0].getElementsByTagName("comentario")

    html += "\t<section>\n" \
    "\t\t<h2>Persona " + str(contador) + "</h2>\n" \
    "\t\t<p>Nombre: " + nombre + "</p>\n" \
    "\t\t<p>Apellidos: " + apellidos + "</p>\n" \
    "\t\t<p>Fecha de nacimiento: " + fechadenacimiento + "</p>\n" \
    "\t\t<p>Lugar de nacimiento: " + lugarnacimiento + "</p>\n" \
    "\t\t<p>Coordenadas lugar de nacimiento: </p>\n" \
    "\t\t<ul>\n" \
    "\t\t\t<li>Longitud: " + coordenadasnacimiento.getAttribute("longitud") + "</li>\n" \
    "\t\t\t<li>Latitud: " + coordenadasnacimiento.getAttribute("latitud") + "</li>\n" \
    "\t\t\t<li>Altitud: " + coordenadasnacimiento.getAttribute("altitud") + " msnm</li>\n" \
    "\t\t</ul>\n" \
    "\t\t<p>Lugar de residencia: " + lugarresidencia + "</p>\n" \
    "\t\t<p>Coordenadas lugar de residencia: </p>\n" \
    "\t\t<ul>\n" \
    "\t\t\t<li>Longitud: " + coordenadasresidencia.getAttribute("longitud") + "</li>\n" \
    "\t\t\t<li>Latitud: " + coordenadasresidencia.getAttribute("latitud") + "</li>\n" \
    "\t\t\t<li>Altitud: " + coordenadasresidencia.getAttribute("altitud") + " msnm</li>\n" \
    "\t\t</ul>\n" \
    "\t\t<p>Fotografias: </p>\n" \

    contadorFotos = 0
    for foto in fotografias:
        html += "\t\t<img src=\"" + foto.firstChild.wholeText.strip() + "\"  alt=\"Foto de " + nombre + "_" + str(contadorFotos) + "\"/>\n"
        contadorFotos+=1
    
    if videos_elem:
        videos = videos_elem[0].getElementsByTagName("url")
    
    if videos:
        html += "\t\t<p>Videos: </p>\n"
        contadorVideos = 0
        for video in videos:
            if video.firstChild is not None: 
                html += "\t\t<video src=\"" + video.firstChild.wholeText.strip() + "\" controls></video>"
                contadorVideos+=1
    else:
        html += "\t\t<p>Videos: No existen videos para esté usuario </p>\n"

    html += "\t\t<p>Comentarios: </p>\n" \

    for comentario in comentarios:
        if comentario.firstChild is not None: 
            html += "\t\t<p>" + comentario.firstChild.wholeText.strip() + "</p>"    
    
    html +="\t</section>\n"

html += "</body>\n" \
"</html>"

#Escritura en archivo

f = open ('redSocial.html','w', encoding='utf-8')
f.write(html)
f.close()