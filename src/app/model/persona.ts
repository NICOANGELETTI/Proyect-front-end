export class Persona {
  id!: number;

  nombre: string;

  apellido: string;

  acercade: string;

  tituloDeveloper: string;

  urlimagenPerfil: string;

  constructor(
    nombre: string,
    apellido: string,
    acercade: string,
    urlimagenPerfil: string,
    tituloDeveloper: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.acercade = acercade;
    this.urlimagenPerfil = urlimagenPerfil;
    this.tituloDeveloper = tituloDeveloper;
  }
}
