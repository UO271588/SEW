'use strict';

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

    controlTeclasPulsadas(event, calculadora) {
        switch (event.key) {
            case "0":
                calculadora.numero(0);
                break;
            case "1":
                calculadora.numero(1);
                break;
            case "2":
                calculadora.numero(2);
                break;
            case "3":
                calculadora.numero(3);
                break;
            case "4":
                calculadora.numero(4);
                break;
            case "5":
                calculadora.numero(5);
                break;
            case "6":
                calculadora.numero(6);
                break;
            case "7":
                calculadora.numero(7);
                break;
            case "8":
                calculadora.numero(8);
                break;
            case "9":
                calculadora.numero(9);
                break;
            case ".":
                calculadora.punto();
                break;
            case "/":
                calculadora.division();
                break;
            case "*":
                calculadora.multiplicacion();
                break;
            case "+":
                calculadora.suma();
                break;
            case "-":
                calculadora.resta();
                break;
            case "Enter":
                calculadora.enter();
                event.preventDefault();
                break;
            case "Shift":
                calculadora.grados();
                break;
            case "c":
                calculadora.cos();
                break;
            case "s":
                calculadora.sin();
                break;
            case "t":
                calculadora.tan();
                break;
            case "a":
                calculadora.acos();
                break;
            case "z":
                calculadora.asin();
                break;
            case "w":
                calculadora.atan();
                break;
            case "l":
                calculadora.log();
                break;
            case "h":
                calculadora.ln();
                break;
            case "Backspace":
                calculadora.delete();
                break;
            case "Delete":
                calculadora.borrar();
                break;
            case "d":
                calculadora.exponentedecimal();
                break;
            case "ñ":
                calculadora.potencia();
                break;
            case "q":
                calculadora.cuadrado();
                break;
            case "x":
                calculadora.exponente();
                break;
            case "r":
                calculadora.raiz();
                break;
            case "e":
                calculadora.e();
                break;
        }
    }
}

var calc = new CalculadoraRPN();
document.addEventListener('keydown', function (event) {
    calc.controlTeclasPulsadas(event, calc);
});