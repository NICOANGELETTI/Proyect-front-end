export class JwtDto {
  //Declaramos los atributos correspondientes en el modelo
  token!: string;
  type!: string;
  nombreUsuario!: string;
  authorities!: string[];
}
