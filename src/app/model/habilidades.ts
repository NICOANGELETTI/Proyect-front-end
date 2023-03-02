export class Habilidades {
    //Declaramos los atributos correspondientes en el modelo
    id!:number; 
    
    habilidad: string;

    porcentaje: number; 

    
    
    

  

    constructor(habilidad:string , porcentaje:number) 
        {
            this.habilidad = habilidad;
            this.porcentaje = porcentaje;
            
            
}
}
