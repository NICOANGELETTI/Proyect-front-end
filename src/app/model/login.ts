export class Login {

  //Declaramos los atributos correspondientes en el modelo
    email:string;
    clave:string;

    constructor(email:string, clave:string){
        this.email = email;
        this.clave = clave;
    }
}