class DNICalculator {
    constructor(numero) {
        this.numero = numero;
    }

    calculoLetra() {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const indice = this.numero % 23;
        const letra = letras.charAt(indice);

        return letra;
    }

}

function data() {
    let flag = true;

    do {
        const numero = prompt("Ingrese el numero del DNI sin letra");
        if (numero.length !== 8) {
            alert("numero incorrecto");
        } else {
            parseInt(numero);
            const dnicalculo = new DNICalculator(numero);
            const letra = dnicalculo.calculoLetra();
            console.log(letra);
            flag = false;
        }
    } while (flag)

}

data();