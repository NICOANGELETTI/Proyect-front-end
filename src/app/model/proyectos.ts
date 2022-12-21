export class Proyectos {
  id!: number;

  urlImagen: string;

  titulo: string;

  descripcion: string;

  urlProyect: string;

  constructor( urlImagen: string, titulo: string, descripcion: string, urlProyect: string
  )
   {
    this.urlImagen = urlImagen;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.urlProyect = urlProyect;
  }
}
