import { Usuario } from "./usuario.entity";
import { Permiso } from "./permiso.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';
@Entity({ name: 'roles' })
export class Role {

    @PrimaryGeneratedColumn('uuid')
    id_rol: string;

    @Column({ type: 'varchar', length: 100 })
    id_empresa: string;
    
    @Column({ type: 'varchar', length: 100 })
    nombre: string;


    // Relacion Muchos a Muchos con usuarios
    // ---- Un role puede ser asignado a muchos usuarios ----

    @ManyToMany(
        () => Usuario, // Entidad con la que se relaciona 
        usuario => usuario.roles // Campo en usuarios al que nos referimos
    )
    usuarios: Usuario[]; // Propiedad para acceder a los usuarios del role

    // Relacion Muchos a Muchos con permisos
    // ---- Un role puede tener muchos permisos ----
    @ManyToMany(
        () => Permiso, // Entidad con la que se relaciona 
        permiso => permiso.roles // Campo en permisos al que nos referimos
    )
    @JoinTable({
        name: 'roles_permisos', // Nombre de la tabla intermedia
        joinColumn: {
            name: 'role_id',
            referencedColumnName: 'id_rol'
        },
        inverseJoinColumn: {
            name: 'permiso_id',
            referencedColumnName: 'id_permiso'
        }
    })
    permisos: Permiso[]; // Propiedad para acceder a los permisos del role

}
