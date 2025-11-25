export class CreateUsuarioDto {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    telefono: boolean;
    Estado: boolean;
    
    // Este campo es importante para la relación ManyToOne
    id_empresa: string; 

    // Este campo es opcional y sirve para tu lógica de buscar roles
    rolesIds?: string[]; 
}