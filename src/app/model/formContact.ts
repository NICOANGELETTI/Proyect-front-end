export class formContact {
   
    id!:number; 
    
    nombre: string;

    correo:string; 

    telefono:string;
    
    asunto:string;

    mensaje:string;


  

    constructor(nombre:string , correo:string 
        ,telefono:string,asunto:string,mensaje:string){
            this.nombre = nombre;
            this.correo = correo;
            this.telefono = telefono;
            this.asunto = asunto;
            this.mensaje =mensaje;
        }
}


