import {Rol} from './Rol';


export class Usuario{    
    
    IdUsuario: number;
    Nombre: string;
    ApellidoPaterno: string;
    ApellidoMaterno?: string;
    FechaNacimiento: string;
    Sexo?: string;
    Telefono?: string;
    Celular?: string;
    Email: string;
    Password: string;
    Rol : Rol;
    Activo?: boolean;

    constructor(IdUsuario: number, Nombre: string, ApellidoPaterno: string, ApellidoMaterno: string, FechaNacimiento: string, Sexo: string, Telefono: string, Celular: string, Email: string, Password: string, 
        Rol: Rol, Activo: boolean){
            
            this.IdUsuario = IdUsuario;
            this.Nombre = Nombre;
            this.ApellidoPaterno = ApellidoPaterno;
            this.ApellidoMaterno = ApellidoMaterno;
            this.FechaNacimiento = FechaNacimiento;
            this.Sexo = Sexo;
            this.Telefono = Telefono;
            this.Celular = Celular;
            this.Email = Email;
            this.Password = Password;
            this.Rol = Rol;


    }

}