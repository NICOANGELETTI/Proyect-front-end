export class Experiencia {
    id!:number; 
    
    puesto: string;

    inicio:string; 

    fin:string;
    
    empresa:string;

  

    constructor(puesto:string , inicio:string 
        ,fin:string,empresa:string){
            this.puesto = puesto;
            this.inicio = inicio;
            this.fin = fin;
            this.empresa = empresa;
            
        }
}


