export class Perfil {
  id: number;

  nombre: string;
  edad: number;
  apellido: string;

  acercade: string;

  tituloDeveloper: string;

  url_imagenperfil: string;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    acercade: string,
    url_imagenperfil: string,
    tituloDeveloper: string
  ) {
    this.edad = edad;
    this.nombre = nombre;
    this.apellido = apellido;
    this.acercade = acercade;
    this.url_imagenperfil = url_imagenperfil;
    this.tituloDeveloper = tituloDeveloper;
  }
}
