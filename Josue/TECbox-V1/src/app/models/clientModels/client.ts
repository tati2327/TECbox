export class Client {
  nombre: string;
  cedula: number;
  correo: string;
  casillero: number;
  celular: number;
  telefono: number;
  provincia: string;
  canton: string;
  distrito: string;
  señas: string;
  usuario: string;
  password: string;

  constructor(nombre, cedula, correo, casillero, celular, telefono, provincia, canton, distrito, señas, usuario, password){
      this.nombre=nombre;
      this.cedula=cedula;
      this.correo=correo;
      this.casillero=casillero;
      this.celular=celular;
      this.telefono=telefono;
      this.provincia=provincia;
      this.canton=canton;
      this.distrito=distrito;
      this.señas=señas;
      this.usuario=usuario;
      this.password=password;
  }
}
