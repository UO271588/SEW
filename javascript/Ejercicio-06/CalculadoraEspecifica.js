class CalculadoraRPN {
    constructor() {
        this.pantalla = 0;
        this.pila = new Array();
        this.operadores = false;
        this.gra = true;
    }

    actdesoperadores() {
        this.operadores = !this.operadores;
    }

    mostrarPila() {
        document.getElementsByTagName('textarea')[0].textContent = "";
        for (var i = 0; i < this.pila.length; i++) {
            document.getElementsByTagName('textarea')[0].textContent += Math.round(this.pila[i] * 10000000) / 10000000 + "\n";
        }
    }

    suma() {
        if (this.pila.length >= 2) {
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value1 + value2;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    resta() {
        if (this.pila.length >= 2) {
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value2 - value1;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    multiplicacion() {
        if (this.pila.length >= 2) {
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value2 * value1;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    division() {
        if (this.pila.length >= 2) {
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value2 / value1;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    numero(numero) {
        if (this.pantalla == "0") {
            this.pantalla = numero + "";
        } else {
            this.pantalla += numero + "";
        }
        document.getElementsByTagName('input')[0].value = this.pantalla;

    }

    punto() {
        this.pantalla += ".";
        document.getElementsByTagName('input')[0].value = this.pantalla;
    }

    enter() {
        this.pila.push(this.pantalla + "");
        this.mostrarPila();
        this.pantalla = 0;
        document.getElementsByTagName('input')[0].value = this.pantalla;
    }

    cos() {
        if (this.pila.length >= 1) {
            var value1 = parseFloat(this.pila.pop());
            var result = 0;
            if (this.gra) {
                result = Math.cos(value1 * Math.PI / 180)
            } else {
                result = Math.cos(value1);
            }
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    sin() {
        if (this.pila.length >= 1) {
            var value1 = parseFloat(this.pila.pop());
            var result = 0;
            if (this.gra) {
                result = Math.sin(value1 * Math.PI / 180)
            } else {
                result = Math.sin(value1);
            }
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    tan() {
        if (this.pila.length >= 1) {
            var value1 = parseFloat(this.pila.pop());
            var result = 0;
            if (this.gra) {
                result = Math.tan(value1 * Math.PI / 180)
            } else {
                result = Math.tan(value1);
            }
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    acos() {
        if (this.pila.length >= 1) {
            var value1 = parseFloat(this.pila.pop());
            var result = 0;
            if (this.gra) {
                result = Math.acos(value1) / (Math.PI / 180);
            } else {
                result = Math.acos(value1);
            }
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    asin() {
        if (this.pila.length >= 1) {
            var value1 = parseFloat(this.pila.pop());
            var result = 0;
            if (this.gra) {
                result = Math.asin(value1) / (Math.PI / 180);
            } else {
                result = Math.asin(value1);
            }
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    atan() {
        if (this.pila.length >= 1) {
            var value1 = parseFloat(this.pila.pop());
            var result = 0;
            if (this.gra) {
                result = Math.atan(value1) / (Math.PI / 180);
            } else {
                result = Math.atan(value1);
            }
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    borrar() {
        this.pila = new Array();
        this.pantalla = "0";
        this.mostrarPila();
        document.getElementsByTagName('input')[0].value = this.pantalla;
    }

    delete() {
        if (this.pantalla.length > 1) {
            this.pantalla = this.pantalla.toString().substring(0, this.pantalla.length - 1);
        } else {
            this.pantalla = "0";
        }
        document.getElementsByTagName('input')[0].value = this.pantalla;
    }

    e() {
        this.pantalla = Math.E;
        document.getElementsByTagName('input')[0].value = this.pantalla;
    }

    log() {
        if (this.pila.length >= 1) {
            var value1 = parseFloat(this.pila.pop());
            var result = Math.log10(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    ln() {
        if (this.pila.length >= 1) {
            var value1 = parseFloat(this.pila.pop());
            var result = Math.log(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    exponente() {
        if (this.pila.length >= 2) {
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value2 * 10 ** value1;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    cuadrado() {
        if (this.pila.length >= 1) {
            var value1 = parseFloat(this.pila.pop());
            var result = value1 ** 2;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    potencia() {
        if (this.pila.length >= 1) {
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value2 ** value1;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    raiz() {
        if (this.pila.length >= 1) {
            var value1 = parseFloat(this.pila.pop());
            var result = Math.sqrt(value1);
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    grados() {
        var pilaCambio = new Array();

        if (!this.gra) {
            //RADIANES A GRADOS
            for (let i = 0; i < this.pila.length; i++) {
                pilaCambio.push(parseFloat(this.pila[i]) / (Math.PI / 180))
            }
            this.pila = pilaCambio;
            document.getElementsByTagName('input')[2].value = "DEG"; //Implementado
            this.gra = true;
        } else {
            //GRADOS A RADIANES
            for (let i = 0; i < this.pila.length; i++) {
                pilaCambio.push(parseFloat(this.pila[i]) * (Math.PI / 180))
            }
            this.pila = pilaCambio;
            document.getElementsByTagName('input')[2].value = "RAD"; //Implementado
            this.gra = false;

        }

        this.mostrarPila();
    }
}

class CalculadoraEnergetica extends CalculadoraRPN {

    constructor() {
        super();
        this.wat = false;
    }

    //Este metodo suma todos los gastos energeticos de la pila teniendo en cuenta que esta dentro de una fabrica con x metros cuadrados (Gasto ENTER Gasto ENTER .... Metros ENTER CalcularFabrica)
    sumaEnergiasTotalFabrica() {
        if (this.pila.length >= 2) {
            var result = 0;
            var metros = parseFloat(this.pila.pop());
            var longitudPila = this.pila.length;
            for (let i = 0; i < longitudPila; i++) {
                result += parseFloat(this.pila.pop());
            }
            result += metros*0.25;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    //Este metodo suma todos los gastos energeticos de la pila teniendo en cuenta que esta en una casa con x metros cuadrados (Gasto ENTER Gasto ENTER .... Metros ENTER CalcularCasa)
    sumaEnergiasTotalCasa() {
        if (this.pila.length >= 2) {
            var result = 0;
            var metros = parseFloat(this.pila.pop());
            var longitudPila = this.pila.length;
            for (let i = 0; i < longitudPila; i++) {
                result += parseFloat(this.pila.pop());
            }
            result += metros*0.10;
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    //Esta funcion añade la suma de las perdidas generadas por los gastos energeticos añadidos a la pila Ej(Gasto ENTER Tipo (1 a 5) ENTER CalcularPerdida))
    anadirPerdidasEnergiaElectrodomesticos() {
        if (this.pila.length >= 2) {
            var value1 = parseFloat(this.pila.pop());
            var value2 = parseFloat(this.pila.pop());
            var result = value2 + (value2 * (value1 / 100)); //Esto simplemente hace que los que tienen un 5 es que gastan mas que los que tienen 1
            //Si se quisiera hacer bien se pondia lo que realmente se fpierde con un tipo F,E,...... pero para simplificar aqui se divide entre 100 lo que se gasta
            this.pila.push(result);
        }
        this.mostrarPila();
    }

    //Esta funcion añade la suma de perdidas energeticas de x ventanas y los metros cuadrados  Ej(numVentanas ENTER numM2 ENTER CalcularVentanas)
    anadirPerdidasEnergiaVentanas() {
        if (this.pila.length >= 2) {
            var value1 = parseFloat(this.pila.pop()); //Metros cuadrados
            var value2 = parseFloat(this.pila.pop()); //Numero de ventanas
            var result = (value2 / value1) * 15;
            this.pila.push(result);
        }
        this.mostrarPila();
    }
    
    cambioUnidad(){
        var cambiowat = new Array();

        if (this.wat) {
            //wat a kw
            for (let i = 0; i < this.pila.length; i++) {
                cambiowat.push(parseFloat(this.pila[i])/1000);
            }
            this.pila = cambiowat;
            document.getElementsByTagName('input')[2].value = "KW"; //Implementado
            this.wat = false;
        } else {
            //kw a wat
            for (let i = 0; i < this.pila.length; i++) {
                cambiowat.push(parseFloat(this.pila[i])*1000);
            }
            this.pila = cambiowat;
            document.getElementsByTagName('input')[2].value = "W"; //Implementado
            this.wat = true;

        }
        
        this.mostrarPila();
    }
}

var calc = new CalculadoraEnergetica();