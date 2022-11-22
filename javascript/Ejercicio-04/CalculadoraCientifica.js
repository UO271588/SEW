class CalculadoraBasica {

    pantalla = "";

    constructor() {
        this.pantalla = "0";
        this.op1 = null;
        this.op2 = null;
        this.opA = "";
        this.igualOp2 = "";
        this.igualOpA = "";
        this.resetPantalla = true;
        this.memoria = null;
    }

    /**
     * Función que añade un número a la pantalla de cálculo
     * @param {*} x Numero a añadir en el INPUT[type=text]
     */
    digitos(x) {
        console.log(x);
        if (this.pantalla === "0" || this.resetPantalla) {
            this.pantalla = "" + x;
            this.resetPantalla = false;
        } else {
            this.pantalla += x;
        }

        this.muestrear();
    }

    /**
     * Función que añade un "+" a la pantalla de cálculo
     */
    suma() {
        console.log("+");
        if (this.opA != "" && this.op1 != null) {
            this.calcularOperacionAnterior();
        } else {
            this.op1 = new Number(eval(this.pantalla));
        }
        this.pantalla = "" + this.op1;
        this.opA = "+";
        this.igualOp2 = null;
        this.igualOpA = "";
        this.muestrear();
        this.resetPantalla = true;
    }

    resta() {
        console.log("-");
        if (this.opA != "" && this.op1 != null) {
            this.calcularOperacionAnterior();
        } else {
            this.op1 = new Number(eval(this.pantalla));
        }
        this.pantalla = "" + this.op1;
        this.opA = "-";
        this.igualOp2 = null;
        this.igualOpA = "";
        this.muestrear();
        this.resetPantalla = true;
    }

    multiplicacion() {
        console.log("x");
        if (this.opA != "" && this.op1 != null) {
            this.calcularOperacionAnterior();
        } else {
            this.op1 = new Number(eval(this.pantalla));
        }
        this.pantalla = "" + this.op1;
        this.opA = "x";
        this.igualOp2 = null;
        this.igualOpA = "";
        this.muestrear();
        this.resetPantalla = true;
    }

    division() {
        console.log("/");
        if (this.opA != "" && this.op1 != null) {
            this.calcularOperacionAnterior();
        } else {
            this.op1 = new Number(eval(this.pantalla));
        }
        this.pantalla = "" + this.op1;
        this.opA = "/";
        this.igualOp2 = null;
        this.igualOpA = "";
        this.muestrear();
        this.resetPantalla = true;
    }

    calcularOperacionAnterior() {
        this.op2 = new Number(eval(this.pantalla));
        if (this.opA === "+" && this.op1 != null) {
            this.op1 = new Number(this.op1 + this.op2);
        }
        if (this.opA === "-" && this.op1 != null) {
            this.op1 = new Number(this.op1 - this.op2);
        }
        if (this.opA === "x" && this.op1 != null) {
            this.op1 = new Number(this.op1 * this.op2);
        }
        if (this.opA === "/" && this.op1 != null) {
            this.op1 = new Number(this.op1 / this.op2);
        }
    }

    muestrear() {
        this.pantalla = "" + this.pantalla;
        if (this.pantalla.length >= 7) {
            document.getElementsByTagName('input')[0].value = new Number(this.pantalla).toPrecision(8);
        } else {
            document.getElementsByTagName('input')[0].value = new Number(this.pantalla);
        }

    }

    igual() {
        console.log("=");

        if (this.igualOp2 != null && this.igualOpA != "") {
            this.calcularOperacionIgualRepetido();
        } else {
            if (this.opA != "") {
                this.igualOp2 = new Number(this.pantalla);
                this.igualOpA = this.opA;
                if (this.opA === "/" && this.op2 == null) {
                    this.calcularOperacionAnterior();
                }
                this.calcularOperacionAnterior();
            } else {
                this.op1 = new Number(this.pantalla);
            }
        }
        this.pantalla = this.op1;
        this.opA = "";
        this.op2 = null;
        this.resetPantalla = true;
        this.muestrear();
    }

    calcularOperacionIgualRepetido() {
        if (this.igualOpA === "+" && this.igualOp2 != null) {
            this.op1 = new Number(this.op1 + this.igualOp2);
        }
        if (this.igualOpA === "-" && this.igualOp2 != null) {
            this.op1 = new Number(this.op1 - this.igualOp2);
        }
        if (this.igualOpA === "x" && this.igualOp2 != null) {
            this.op1 = new Number(this.op1 * this.igualOp2);
        }
        if (this.igualOpA === "/" && this.igualOp2 != null) {
            this.op1 = new Number(this.op1 / this.igualOp2);
        }
    }

    porcentaje() {
        //Depende de si lo que se hace es una suma/resta o una multiplicacion/division el funcionamiento es distinto
        if (this.opA === "+" || this.opA === "-") {
            this.pantalla = "" + this.op1 * new Number(this.pantalla) / 100;
            console.log("+/-");
        } else if (this.opA === "x" || this.opA === "/") {
            this.pantalla = "" + new Number(this.pantalla) / 100;
            console.log("*//");
        } else {
            this.pantalla = "" + new Number(this.pantalla) / 100;
            console.log("unico");
        }

        this.muestrear();
    }

    raiz() {
        this.pantalla = "" + Math.sqrt(new Number(this.pantalla));
        this.muestrear();
    }
    mas_menos() {
        this.pantalla = "" + new Number(this.pantalla) * (-1);
        this.muestrear();
    }

    mMas() {
        this.igual();
        this.memoria = this.memoria + new Number(this.pantalla);
    }

    mMenos() {
        this.igual();
        this.memoria = this.memoria - new Number(this.pantalla);
    }

    mrc() {
        if (this.memoria == null) {
            this.igual();
            this.memoria = new Number(this.pantalla);
        } else {
            this.pantalla = "" + this.memoria;
        }
        this.muestrear();
    }


    /**
     * Función que borra el estado de la pantalla y lo establece a 0
     */
    borrarPantalla() {
        this.pantalla = "0";
        this.muestrear();
    }

    borrar() {
        this.pantalla = "0";
        this.op1 = null;
        this.op2 = null;
        this.opA = "";
        this.igualOp2 = "";
        this.igualOpA = "";
        this.resetPantalla = true;
        this.memoria = null;
        this.muestrear();
    }


    punto() {
        if (this.pantalla === "0" || this.resetPantalla) {
            this.pantalla = "0.";
            this.resetPantalla = false;
        } else {
            this.pantalla += ".";
        }

        this.muestrear()
    }
}


class Calculadora extends CalculadoraBasica {
    constructor() {
        super();
        this.pantallaInterna = "0";
        this.ultimoOperador = "";
        this.ultimoValor = "";
        this.ultimoValorInt = "";
        this.operadores = [];
        this.shift = false;
        this.rad = false;
    }


    digitos(x) {
        if (this.pantallaInterna === "0" || this.resetPantalla) {
            this.pantallaInterna = "" + x;
            this.pantalla = "" + x;
            this.ultimoOperador = "";
            this.resetPantalla = false;
        } else {
            this.pantallaInterna += x;
            this.pantalla += x
        }
        this.ultimoValor = "";
        this.ultimoValorInt = "";
        this.muestrear();
    }

    suma() {
        this.operadores.push("+");
        this.pantalla += "+";
        this.pantallaInterna += "+";
        this.resetPantalla = false;
        this.muestrear();
    }

    resta() {
        this.operadores.push("-");
        this.pantalla += "-";
        this.pantallaInterna += "-";
        this.resetPantalla = false;
        this.muestrear();
    }

    multiplicacion() {
        this.operadores.push("*");
        this.pantalla += "*";
        this.pantallaInterna += "*";
        this.resetPantalla = false;
        this.muestrear();
    }

    division() {
        this.operadores.push("/");
        this.pantalla += "/";
        this.pantallaInterna += "/";
        this.resetPantalla = false;
        this.muestrear();
    }

    igual() {
        if (this.ultimoOperador === "" || this.ultimoOperador === undefined || this.operadores.length != 0) {
            this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimoOperador = this.operadores[this.operadores.length - 1];
            if (this.ultimoOperador != "" && this.ultimoValorInt === "") {
                this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 2];
                this.pantallaInterna = "" + this.pantallaInterna + this.ultimoValorInt;
            } else {
                this.pantallaInterna = "" + this.pantallaInterna;
            }

        } else {
            this.pantallaInterna = "(" + this.pantallaInterna + ")" + this.ultimoOperador + this.ultimoValorInt;
        }
        this.pantalla = eval(this.pantallaInterna);
        this.resetPantalla = true;
        this.operadores = [];
        this.muestrear();
    }

    muestrear() {
        console.log("Pantalla Interna: " + this.pantallaInterna);
        console.log("Pantalla: " + this.pantalla);
        document.getElementsByTagName('input')[0].value = this.pantalla;
    }

    cos() {
        if (this.operadores.length != 0) {
            this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimoValor = this.pantalla.split(this.operadores[this.operadores.length - 1])[this.pantalla.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimaoperacionInt = this.pantallaInterna.substring(0, this.pantallaInterna.length - this.ultimoValorInt.toString().length);
            this.ultimaoperacion = this.pantalla.substring(0, this.pantalla.length - this.ultimoValor.toString().length);

            if (this.ultimoValorInt === "" || this.ultimoValor === undefined) {
                this.ultimoValorInt = this.ultimaoperacionInt.substring(0, this.ultimaoperacion.length - 1);
                this.ultimoValor = this.ultimaoperacion.substring(0, this.ultimaoperacion.length - 1);
            }

            if (!this.rad) {
                this.ultimoValorInt = eval(this.ultimoValorInt) * Math.PI / 180;
            }

            if (!this.shift) {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.cos(" + this.ultimoValorInt + ")";
                this.pantalla = this.ultimaoperacion + "cos(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.pow(Math.cos(" + this.ultimoValorInt + "),-1)";
                this.pantalla = this.ultimaoperacion + "cos1(" + this.ultimoValor + ")";
            }

        } else {
            this.ultimoValorInt = this.pantallaInterna;
            this.ultimoValor = this.pantalla;

            if (!this.rad) {
                this.ultimoValorInt = eval(this.ultimoValorInt) * Math.PI / 180;
            }

            if (!this.shift) {
                this.pantallaInterna = "Math.cos(" + this.ultimoValorInt + ")";
                this.pantalla = "cos(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = "Math.pow(Math.cos(" + this.ultimoValorInt + "),-1)";
                this.pantalla = "cos1(" + this.ultimoValor + ")";
            }
        }
        this.muestrear();
    }

    sin() {
        if (this.operadores.length != 0) {
            this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimoValor = this.pantalla.split(this.operadores[this.operadores.length - 1])[this.pantalla.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimaoperacionInt = this.pantallaInterna.substring(0, this.pantallaInterna.length - this.ultimoValorInt.toString().length);
            this.ultimaoperacion = this.pantalla.substring(0, this.pantalla.length - this.ultimoValor.toString().length);

            if (this.ultimoValorInt === "" || this.ultimoValor === undefined) {
                this.ultimoValorInt = this.ultimaoperacionInt.substring(0, this.ultimaoperacion.length - 1);
                this.ultimoValor = this.ultimaoperacion.substring(0, this.ultimaoperacion.length - 1);
            }

            if (!this.rad) {
                this.ultimoValorInt = eval(this.ultimoValorInt) * Math.PI / 180;
            }

            if (!this.shift) {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.sin(" + this.ultimoValorInt + ")";
                this.pantalla = this.ultimaoperacion + "sin(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.pow(Math.sin(" + this.ultimoValorInt + "),-1)";
                this.pantalla = this.ultimaoperacion + "sin1(" + this.ultimoValor + ")";
            }

        } else {
            this.ultimoValorInt = this.pantallaInterna;
            this.ultimoValor = this.pantalla;

            if (!this.rad) {
                this.ultimoValorInt = eval(this.ultimoValorInt) * Math.PI / 180;
            }

            if (!this.shift) {
                this.pantallaInterna = "Math.sin(" + this.ultimoValorInt + ")";
                this.pantalla = "sin(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = "Math.pow(Math.sin(" + this.ultimoValorInt + "),-1)";
                this.pantalla = "sin1(" + this.ultimoValor + ")";
            }
        }
        this.muestrear();
    }

    tan() {
        if (this.operadores.length != 0) {
            this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimoValor = this.pantalla.split(this.operadores[this.operadores.length - 1])[this.pantalla.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimaoperacionInt = this.pantallaInterna.substring(0, this.pantallaInterna.length - this.ultimoValorInt.toString().length);
            this.ultimaoperacion = this.pantalla.substring(0, this.pantalla.length - this.ultimoValor.toString().length);

            if (this.ultimoValorInt === "" || this.ultimoValor === undefined) {
                this.ultimoValorInt = this.ultimaoperacionInt.substring(0, this.ultimaoperacion.length - 1);
                this.ultimoValor = this.ultimaoperacion.substring(0, this.ultimaoperacion.length - 1);
            }

            if (!this.rad) {
                this.ultimoValorInt = eval(this.ultimoValorInt) * Math.PI / 180;
            }

            if (!this.shift) {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.tan(" + this.ultimoValorInt + ")";
                this.pantalla = this.ultimaoperacion + "tan(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.pow(Math.tan(" + this.ultimoValorInt + "),-1)";
                this.pantalla = this.ultimaoperacion + "tan1(" + this.ultimoValor + ")";
            }

        } else {
            this.ultimoValorInt = this.pantallaInterna;
            this.ultimoValor = this.pantalla;

            if (!this.rad) {
                this.ultimoValorInt = eval(this.ultimoValorInt) * Math.PI / 180;
            }

            if (!this.shift) {
                this.pantallaInterna = "Math.tan(" + this.ultimoValorInt + ")";
                this.pantalla = "tan(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = "Math.pow(Math.tan(" + this.ultimoValorInt + "),-1)";
                this.pantalla = "tan1(" + this.ultimoValor + ")";
            }
        }
        this.muestrear();
    }

    logaritmo() {
        if (this.operadores.length != 0) {
            this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimoValor = this.pantalla.split(this.operadores[this.operadores.length - 1])[this.pantalla.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimaoperacionInt = this.pantallaInterna.substring(0, this.pantallaInterna.length - this.ultimoValorInt.toString().length);
            this.ultimaoperacion = this.pantalla.substring(0, this.pantalla.length - this.ultimoValor.toString().length);

            if (this.ultimoValorInt === "" || this.ultimoValor === undefined) {
                this.ultimoValorInt = this.ultimaoperacionInt.substring(0, this.ultimaoperacion.length - 1);
                this.ultimoValor = this.ultimaoperacion.substring(0, this.ultimaoperacion.length - 1);
            }
            if (!this.shift) {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.log10(" + this.ultimoValorInt + ")";
                this.pantalla = this.ultimaoperacion + "log(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.log(" + this.ultimoValorInt + ")";
                this.pantalla = this.ultimaoperacion + "ln(" + this.ultimoValor + ")";
            }

        } else {
            this.ultimoValorInt = this.pantallaInterna;
            this.ultimoValor = this.pantalla;
            if (!this.shift) {
                this.pantallaInterna = "Math.log10(" + this.pantallaInterna + ")";
                this.pantalla = "log(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = "Math.log(" + this.pantallaInterna + ")";
                this.pantalla = "ln(" + this.ultimoValor + ")";
            }
        }
        this.muestrear();
    }

    mod() {
        this.operadores.push("%");
        this.pantalla += "mod";
        this.pantallaInterna += "%";
        this.resetPantalla = false;
        this.muestrear();
    }

    cuadrado() {
        if (this.operadores.length != 0) {
            this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimoValor = this.pantalla.split(this.operadores[this.operadores.length - 1])[this.pantalla.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimaoperacionInt = this.pantallaInterna.substring(0, this.pantallaInterna.length - this.ultimoValorInt.toString().length);
            this.ultimaoperacion = this.pantalla.substring(0, this.pantalla.length - this.ultimoValor.toString().length);

            if (this.ultimoValorInt === "" || this.ultimoValor === undefined) {
                this.ultimoValorInt = this.ultimaoperacionInt.substring(0, this.ultimaoperacion.length - 1);
                this.ultimoValor = this.ultimaoperacion.substring(0, this.ultimaoperacion.length - 1);
            }
            if (!this.shift) {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.pow(" + this.ultimoValorInt + ",2)";
                this.pantalla = this.ultimaoperacion + "sqr(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.pow(" + this.ultimoValorInt + ",3)";
                this.pantalla = this.ultimaoperacion + "sqr3(" + this.ultimoValor + ")";
            }


        } else {
            this.ultimoValorInt = this.pantallaInterna;
            this.ultimoValor = this.pantalla;
            if (!this.shift) {
                this.pantallaInterna = "Math.pow(" + this.pantallaInterna + ",2)";
                this.pantalla = "sqr(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = "Math.pow(" + this.pantallaInterna + ",3)";
                this.pantalla = "sqr3(" + this.ultimoValor + ")";
            }

        }
        this.muestrear();
    }

    mod() {
        this.operadores.push("%");
        this.pantalla += "mod";
        this.pantallaInterna += "%";
        this.resetPantalla = false;
        this.muestrear();
    }

    elevado() {
        this.operadores.push("**");
        this.pantalla += "**";
        this.pantallaInterna += "**";
        this.resetPantalla = false;
        this.muestrear();
    }

    raiz() {
        if (this.operadores.length != 0) {
            this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimoValor = this.pantalla.split(this.operadores[this.operadores.length - 1])[this.pantalla.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimaoperacionInt = this.pantallaInterna.substring(0, this.pantallaInterna.length - this.ultimoValorInt.toString().length);
            this.ultimaoperacion = this.pantalla.substring(0, this.pantalla.length - this.ultimoValor.toString().length);

            if (this.ultimoValorInt === "" || this.ultimoValor === undefined) {
                this.ultimoValorInt = this.ultimaoperacionInt.substring(0, this.ultimaoperacion.length - 1);
                this.ultimoValor = this.ultimaoperacion.substring(0, this.ultimaoperacion.length - 1);
            }
            if (!this.shift) {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.sqrt(" + this.ultimoValorInt + ")";
                this.pantalla = this.ultimaoperacion + "√(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.pow(" + this.ultimoValorInt + ",-1)";
                this.pantalla = this.ultimaoperacion + "pow1(" + this.ultimoValor + ")";
            }
        } else {
            this.ultimoValorInt = this.pantallaInterna;
            this.ultimoValor = this.pantalla;
            if (!this.shift) {
                this.pantallaInterna = "Math.sqrt(" + this.pantallaInterna + ")";
                this.pantalla = "√(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = "Math.pow(" + this.pantallaInterna + ",-1)";
                this.pantalla = "pow1(" + this.ultimoValor + ")";
            }
        }
        this.muestrear();
    }

    exponentedecimal() {
        if (this.operadores.length != 0) {
            this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimoValor = this.pantalla.split(this.operadores[this.operadores.length - 1])[this.pantalla.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimaoperacionInt = this.pantallaInterna.substring(0, this.pantallaInterna.length - this.ultimoValorInt.toString().length);
            this.ultimaoperacion = this.pantalla.substring(0, this.pantalla.length - this.ultimoValor.toString().length);

            if (this.ultimoValorInt === "" || this.ultimoValor === undefined) {
                this.ultimoValorInt = this.ultimaoperacionInt.substring(0, this.ultimaoperacion.length - 1);
                this.ultimoValor = this.ultimaoperacion.substring(0, this.ultimaoperacion.length - 1);
            }
            if (!this.shift) {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.pow(10," + this.ultimoValorInt + ")";
                this.pantalla = this.ultimaoperacion + "10^(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = this.ultimaoperacionInt + "Math.exp(" + this.ultimoValorInt + ")";
                this.pantalla = this.ultimaoperacion + "e^(" + this.ultimoValor + ")";
            }
        } else {
            this.ultimoValorInt = this.pantallaInterna;
            this.ultimoValor = this.pantalla;
            if (!this.shift) {
                this.pantallaInterna = "Math.pow(10," + this.pantallaInterna + ")";
                this.pantalla = "10^(" + this.ultimoValor + ")";
            } else {
                this.pantallaInterna = "Math.exp(" + this.pantallaInterna + ")";
                this.pantalla = "e^(" + this.ultimoValor + ")";
            }
        }
        this.muestrear();
    }

    pi() {
        if (this.operadores.length === 0 || this.resetPantalla) {
            this.pantallaInterna = "Math.PI";
            this.pantalla = "π";
            this.ultimoOperador = "";
            this.resetPantalla = false;
        } else {
            this.pantallaInterna += "Math.PI";
            this.pantalla += "π";
        }
        this.ultimoValor = "";
        this.ultimoValorInt = "";
        this.muestrear();
    }

    punto() {
        if (this.pantallaInterna === "0" || this.resetPantalla) {
            this.pantalla = "0.";
            this.pantallaInterna = "0.";
            this.resetPantalla = false;
        } else {
            this.pantallaInterna += ".";
            this.pantalla += ".";
        }
        this.muestrear();
    }

    mas_menos() {
        this.operadores.push("*");
        if (this.resetPantalla) {
            this.pantallaInterna = this.pantalla + "*(-1)";
        } else {
            this.pantallaInterna += "*(-1)"
        }
        this.pantalla += "*(-1)";
        this.resetPantalla = false;
        this.muestrear();
    }

    factorial() {
        var resultado = eval(this.pantallaInterna);
        var factorial = 1;
        for (let i = 1; i <= resultado; i++) {
            factorial = factorial * i;
        }
        this.pantallaInterna = factorial;
        this.pantalla = factorial;
        this.operadores = [];
        this.muestrear();
    }

    up() {
        if (this.shift == false) {
            //x2 ==> x3
            document.getElementsByTagName('input')[7].value = "x³"; //Implementado
            //sin ==> sin-1
            document.getElementsByTagName('input')[9].value = "sin⁻¹"; //Implementado
            //cos ==> cos-1
            document.getElementsByTagName('input')[10].value = "cos⁻¹"; //Implementado
            //tan ==> tan-1
            document.getElementsByTagName('input')[11].value = "tan⁻¹"; //Implementado
            //raiz ==> x-1
            document.getElementsByTagName('input')[12].value = "x⁻¹"; //Implementado
            //10x ==> ex
            document.getElementsByTagName('input')[13].value = "eˣ"; //Implementado
            //log ==> ln
            document.getElementsByTagName('input')[14].value = "ln"; //Implementado

            this.shift = true;
        } else {
            //x3 ==> x2
            document.getElementsByTagName('input')[7].value = "x²"; //Implementado
            //sin-1 ==> sin
            document.getElementsByTagName('input')[9].value = "sin"; //Implementado
            //cos-1 ==> cos
            document.getElementsByTagName('input')[10].value = "cos"; //Implementado
            //tan-1 ==> tan
            document.getElementsByTagName('input')[11].value = "tan"; //Implementado
            //x-1 ==> raiz
            document.getElementsByTagName('input')[12].value = "√"; //Implementado
            //ex ==> 10x
            document.getElementsByTagName('input')[13].value = "10ˣ"; //Implementado
            //ln ==> log
            document.getElementsByTagName('input')[14].value = "log"; //Implementado

            this.shift = false;
        }
    }

    cambioTipo() {
        if (this.rad == false) {
            document.getElementsByTagName('input')[1].value = "RAD"; //Implementado
            this.rad = true;
        } else {
            document.getElementsByTagName('input')[1].value = "DEG"; //Implementado
            this.rad = false;
        }
    }

    openParent() {
        if (this.operadores.length != 0) {
            this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimoValor = this.pantalla.split(this.operadores[this.operadores.length - 1])[this.pantalla.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimaoperacionInt = this.pantallaInterna.substring(0, this.pantallaInterna.length - this.ultimoValorInt.toString().length);
            this.ultimaoperacion = this.pantalla.substring(0, this.pantalla.length - this.ultimoValor.toString().length);

            if (this.ultimoValorInt === "" || this.ultimoValor === undefined) {
                this.ultimoValorInt = this.ultimaoperacionInt.substring(0, this.ultimaoperacion.length - 1);
                this.ultimoValor = this.ultimaoperacion.substring(0, this.ultimaoperacion.length - 1);
            }
            this.pantallaInterna = this.ultimaoperacionInt + "(" + this.ultimoValorInt;
            this.pantalla = this.ultimaoperacion + "(" + this.ultimoValor;
        } else {
            this.ultimoValorInt = this.pantallaInterna;
            this.ultimoValor = this.pantalla;
            this.pantallaInterna = "(" + this.pantallaInterna;
            this.pantalla = "(" + this.ultimoValor;
        }
        this.muestrear();
    }

    closeParent() {
        if (this.operadores.length != 0) {
            this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimoValor = this.pantalla.split(this.operadores[this.operadores.length - 1])[this.pantalla.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimaoperacionInt = this.pantallaInterna.substring(0, this.pantallaInterna.length - this.ultimoValorInt.toString().length);
            this.ultimaoperacion = this.pantalla.substring(0, this.pantalla.length - this.ultimoValor.toString().length);

            if (this.ultimoValorInt === "" || this.ultimoValor === undefined) {
                this.ultimoValorInt = this.ultimaoperacionInt.substring(0, this.ultimaoperacion.length - 1);
                this.ultimoValor = this.ultimaoperacion.substring(0, this.ultimaoperacion.length - 1);
            }
            this.pantallaInterna = this.ultimaoperacionInt + this.ultimoValorInt + ")";
            this.pantalla = this.ultimaoperacion + this.ultimoValor + ")";
        } else {
            this.ultimoValorInt = this.pantallaInterna;
            this.ultimoValor = this.pantalla;
            this.pantallaInterna = this.pantallaInterna + ")";
            this.pantalla = this.ultimoValor + ")";
        }
        this.muestrear();
    }

    borrar() {
        this.pantalla = "0";
        this.pantallaInterna = "0";
        this.ultimoOperador = "";
        this.ultimoValor = "";
        this.ultimoValorInt = "";
        this.operadores = [];
        this.memoria = "";
    }

    borrarPantalla(){
        this.pantalla = "0";
        this.pantallaInterna = "0";
        this.operadores = [];
        this.ultimoValor = "";
        this.ultimoValorInt = "";
    }

    ms(){
        this.pantallaInterna = eval(this.pantallaInterna);
        this.pantalla = this.pantallaInterna;
        this.memoria = this.pantallaInterna;
        this.operadores = [];
        this.resetPantalla = true;
        this.muestrear();
    }

    mMas(){
        this.pantallaInterna = eval(this.pantallaInterna);
        this.pantalla = this.pantallaInterna;
        this.resetPantalla = true;
        this.muestrear();
        this.memoria = Number(this.memoria) + this.pantallaInterna;
    }

    mMenos(){
        this.pantallaInterna = eval(this.pantallaInterna);
        this.pantalla = this.pantallaInterna;
        this.resetPantalla = true;
        this.muestrear();
        this.memoria = Number(this.memoria) - this.pantallaInterna;
    }

    mr(){
        if(this.memoria != "" || this.memoria === 0){
            this.pantallaInterna = eval(this.memoria);
            this.pantalla = this.pantallaInterna;
            this.muestrear();
        }
    }

    mc(){
        this.memoria = "";
    }

    remove() {
        if (this.operadores.length != 0) {
            this.ultimoValorInt = this.pantallaInterna.split(this.operadores[this.operadores.length - 1])[this.pantallaInterna.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimoValor = this.pantalla.split(this.operadores[this.operadores.length - 1])[this.pantalla.split(this.operadores[this.operadores.length - 1]).length - 1];
            this.ultimaoperacionInt = this.pantallaInterna.substring(0, this.pantallaInterna.length - this.ultimoValorInt.toString().length);
            this.ultimaoperacion = this.pantalla.substring(0, this.pantalla.length - this.ultimoValor.toString().length);
            this.pantallaInterna = this.ultimaoperacionInt;
            this.pantalla = this.ultimaoperacion;
        } else {
            this.pantallaInterna = this.pantallaInterna.substring(0, this.pantallaInterna.length - 1);
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
        }
        this.muestrear();
    }

    exponente(){
        //No encontrado un metodo que convierta de un numero completo a uno con exponente decimal
    }

    controlTeclasPulsadas(event, calculadora) {
        switch (event.key) {
            case "0":
                calculadora.digitos(0);
                break;
            case "1":
                calculadora.digitos(1);
                break;
            case "2":
                calculadora.digitos(2);
                break;
            case "3":
                calculadora.digitos(3);
                break;
            case "4":
                calculadora.digitos(4);
                break;
            case "5":
                calculadora.digitos(5);
                break;
            case "6":
                calculadora.digitos(6);
                break;
            case "7":
                calculadora.digitos(7);
                break;
            case "8":
                calculadora.digitos(8);
                break;
            case "9":
                calculadora.digitos(9);
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
                calculadora.igual();
                event.preventDefault();
                break;
            case "Shift":
                calculadora.up();
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
            case "m":
                calculadora.mod();
                break;
            case "l":
                calculadora.logaritmo();
                break;
            case "Backspace":
                calculadora.remove();
                break;
            case "Delete":
                calculadora.borrar();
                break;
            case "Insert":
                calculadora.borrarPantalla();
                break;
            case "d":
                calculadora.exponentedecimal();
                break;
            case "x":
                calculadora.elevado();
                break;
            case "q":
                calculadora.cuadrado();
                break;
            case "r":
                calculadora.raiz();
                break;
            case "f":
                calculadora.factorial();
                break;
            case "p":
                calculadora.pi();
                break;
            case "e":
                calculadora.mas_menos();
                break;
            case "i":
                calculadora.openParent();
                break;
            case "o":
                calculadora.closeParent();
                break;
            case "Tab":
                calculadora.cambioTipo();
                break;
            case "ArrowUp":
                calculadora.ms();
                break;
            case "ArrowRight":
                calculadora.mMenos();
                break;
            case "ArrowLeft":
                calculadora.mMas();
                break;
            case "ArrowDown":
                calculadora.mr();
                break;
            case "End":
                calculadora.mc();
                break;
            case "y":
                calculadora.exponente();
                break;
        }
    }
}

var calc = new Calculadora();
document.addEventListener('keydown', function (event) {
    calc.controlTeclasPulsadas(event, calc);
});