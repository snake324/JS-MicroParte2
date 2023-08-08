class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    puedeConducir() {
      if (this.edad >= 18) {
        return `${this.nombre} puede conducir.`;
      } else {
        return `${this.nombre} no puede conducir.`;
      }
    }
  }
  
  function data() {
    const nombre = prompt("Ingrese su nombre:");
    const edad = parseInt(prompt("Ingrese su edad:"));
  
    const persona = new Persona(nombre, edad);
  
    const mensaje = persona.puedeConducir();
  
    console.log(mensaje);
  }
  
  data();