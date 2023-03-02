export class Experiencia {
    //Declaramos los atributos correspondientes en el modelo
    id:number; 
    
    puesto: string;

    inicio:string; 

    fin:string;
    
    empresa:string;

    url_imagen:string;


  

    constructor(puesto:string , inicio:string 
        ,fin:string,empresa:string,url_imagen:string){
            
            this.puesto = puesto;
            this.inicio = inicio;
            this.fin = fin;
            this.empresa = empresa;
            this.url_imagen =url_imagen;
          
        }
}


