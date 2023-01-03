export class Persona {

    id!:number; 
    
    nombre: string;

    apellido:string; 

    acercade:string;

    tituloDeveloper:string;
    
    url_imagenPerfil:string;

  

    constructor(nombre:string , apellido:string,  acercade:string,url_imagenPerfil:string , tituloDeveloper:string)
        {
            this.nombre = nombre;
            this.apellido = apellido;
            this.acercade = acercade;
            this.url_imagenPerfil = url_imagenPerfil;
            this.tituloDeveloper = tituloDeveloper;
            

            

}
}
