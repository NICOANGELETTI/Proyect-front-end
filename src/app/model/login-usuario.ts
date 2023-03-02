export class LoginUsuario {
  //Declaramos los atributos correspondientes en el modelo
  nombreUsuario: string;
  password: string;

  constructor(nombreUsuario: string, password: string) {
    this.nombreUsuario = nombreUsuario;
    this.password = password;
  }
}
