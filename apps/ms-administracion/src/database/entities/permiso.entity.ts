import { Role } from "./role.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';

@Entity({ name: 'permisos' })
export class Permiso {
    @PrimaryGeneratedColumn('uuid')
    id_permiso: string;

    @Column({ type: 'varchar', length: 100 })
    recurso: string;

    @Column({ type: 'varchar', length: 50 })
    accion: string;

    // Relacion Muchos a Muchos con roles
    // ---- Un permiso puede ser asignado a muchos roles ----
    @ManyToMany(
        () => Role, // Entidad con la que se relaciona 
        role => role.permisos // Campo en roles al que nos referimos
    )
    roles: Role[]; // Propiedad para acceder a los roles del permiso
    
}
