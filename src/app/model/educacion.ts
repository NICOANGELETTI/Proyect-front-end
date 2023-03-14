export class Educacion {

  //Declaramos los atributos correspondientes en el modelo
  id: number;

  titulo: string;

  url_imagen: string;

  inicio: string;

  fin: string;

  institucion: string;

  constructor(
   id:number,
    url_imagen: string,
    titulo: string,
    inicio: string,
    fin: string,
    institucion: string
  ) {
    this.id= id;
    this.url_imagen = url_imagen;
    this.titulo = titulo;
    this.inicio = inicio;
    this.fin = fin;
    this.institucion = institucion;
  }
}
