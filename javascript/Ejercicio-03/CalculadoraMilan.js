class Calculadora {

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
        if(this.pantalla === "0" || this.resetPantalla){
            this.pantalla = "" + x;
            this.resetPantalla = false;
        }else{
            this.pantalla += x;
        }

        this.muestrear();
    }

    /**
     * Función que añade un "+" a la pantalla de cálculo
     */
    suma() {
        console.log("+");
        if(this.opA != "" && this.op1 != null){
            this.calcularOperacionAnterior();
        }else{
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
        if(this.opA != "" && this.op1 != null){
            this.calcularOperacionAnterior();
        }else{
            this.op1 = new Number(eval(this.pantalla));
        }
        this.pantalla = "" + this.op1;
        this.opA = "-";
        this.igualOp2 = null;
        this.igualOpA = "";
        this.muestrear();
        this.resetPantalla = true;
    }

    multiplicacion(){
        console.log("x");
        if(this.opA != "" && this.op1 != null){
            this.calcularOperacionAnterior();
        }else{
            this.op1 = new Number(eval(this.pantalla));
        }
        this.pantalla = "" + this.op1;
        this.opA = "x";
        this.igualOp2 = null;
        this.igualOpA = "";
        this.muestrear();
        this.resetPantalla = true;
    }

    division(){
        console.log("/");
        if(this.opA != "" && this.op1 != null){
            this.calcularOperacionAnterior();
        }else{
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
        if(this.opA === "+" && this.op1 != null){
            this.op1 = new Number(this.op1 + this.op2);
        }
        if(this.opA === "-" && this.op1 != null){ 
            this.op1 =  new Number(this.op1 - this.op2);
        }
        if(this.opA === "x" && this.op1 != null){ 
            this.op1 =  new Number(this.op1 * this.op2);
        }
        if(this.opA === "/" && this.op1 != null){ 
            this.op1 =  new Number(this.op1 / this.op2);
        }
    }

    muestrear() {
        console.log(" op1:" +this.op1 + " op2:" +this.op2 + " opA:" +this.opA);
        this.pantalla = "" + this.pantalla;
        if(this.pantalla.length >= 7){
            document.getElementsByTagName('input')[0].value = new Number(this.pantalla).toPrecision(8);
        }else{
            document.getElementsByTagName('input')[0].value = new Number(this.pantalla);
        }
       
    }

    igual(){
        console.log("=");

        if(this.igualOp2 != null && this.igualOpA != ""){
            this.calcularOperacionIgualRepetido();
        }else{
            if(this.opA != ""){
                this.igualOp2 = new Number(this.pantalla);
                this.igualOpA = this.opA;
                if(this.opA === "/" && this.op2 == null){
                    this.calcularOperacionAnterior();
                }
                this.calcularOperacionAnterior();
            }else{
                this.op1 = new Number(this.pantalla);
            }
        }
        this.pantalla = this.op1;
        this.opA = "";
        this.op2 = null;
        this.resetPantalla =true;
        this.muestrear();
    }

    calcularOperacionIgualRepetido() {
        if(this.igualOpA === "+" && this.igualOp2 != null){
            this.op1 = new Number(this.op1 + this.igualOp2);
        }
        if(this.igualOpA === "-" && this.igualOp2 != null){ 
            this.op1 = new Number(this.op1 - this.igualOp2);
        }
        if(this.igualOpA === "x" && this.igualOp2 != null){ 
            this.op1 = new Number(this.op1 * this.igualOp2);
        }
        if(this.igualOpA === "/" && this.igualOp2 != null){ 
            this.op1 = new Number(this.op1 / this.igualOp2);
        }
    }

    porcentaje(){
        //Depende de si lo que se hace es una suma/resta o una multiplicacion/division el funcionamiento es distinto
        if(this.opA === "+" || this.opA === "-"){
            this.pantalla = "" + this.op1*new Number(this.pantalla)/100; 
            console.log("+/-");
        }else if(this.opA === "x" || this.opA === "/"){
            this.pantalla = "" + new Number(this.pantalla)/100; 
            console.log("*//");
        }else{
            this.pantalla = "" + new Number(this.pantalla)/100;
            console.log("unico");
        }

        this.muestrear();
    }

    raiz(){
        this.pantalla = "" + Math.sqrt(new Number(this.pantalla));
        this.muestrear(); 
    }
    mas_menos(){
        this.pantalla = "" + new Number(this.pantalla)*(-1);
        this.muestrear();
    }

    mMas(){
        this.igual();
        this.memoria = this.memoria +new Number(this.pantalla);
    }

    mMenos(){
        this.igual();
        this.memoria =  this.memoria - new Number(this.pantalla);
    }

    mrc(){
        if(this.memoria == null){
            this.igual();
            this.memoria = new Number(this.pantalla);
        }else{
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

    borrar(){
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


    punto(){
        if(this.pantalla === "0" || this.resetPantalla){
            this.pantalla = "0.";
            this.resetPantalla = false;
        }else{
            this.pantalla += ".";
        }

        this.muestrear()
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
            case "Delete":
                calculadora.borrar();
                break;
            case "Insert":
                calculadora.borrarPantalla();
                break;
            case "r":
                calculadora.raiz();
                break;
            case "e":
                calculadora.mas_menos();
                break;
            case "ArrowUp":
                calculadora.mrc();
                break;
            case "ArrowRight":
                calculadora.mMenos();
                break;
            case "ArrowLeft":
                calculadora.mMas();
                break;
        }
    }
}

var calc = new Calculadora();
document.addEventListener('keydown', function (event) {
    calc.controlTeclasPulsadas(event, calc);
});
