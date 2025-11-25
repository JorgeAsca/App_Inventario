import { Empresa } from "../../empresa/entities/empresa.entity";
import { Role } from "../../role/entities/role.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id_usuario: string;

    @Column({ type: 'varchar', length: 100 })
    id_empresa: string;

    @Column({ type: 'varchar', length: 100, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 100 })
    password: string;

    @Column({ type: 'varchar', length: 100 })
    nombre: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    apellido: string;

    @Column({ type: 'boolean', default: true })
    telefono: boolean;

    @Column({ type: 'boolean', default: true })
    Estado: boolean;

    @Column({ type: 'varchar', length: 100, nullable: true })
    Ultimo_Accesso: string;
    // Relacion muchos a muchos con roles
    // ---- Muchos Usuarios pertenecen a una emoresa ---- 

    @ManyToOne(
        () => Empresa, // Entidad con la que se relaciona 
        empresa => empresa.usuarios, // Campo en la empresa a las que nos referimos
        { nullable: false } // Un usuario SIMEPRE debe de tener una empresa 
    )
    @JoinColumn({ name: 'empresa_id' }) // Nombre de las Fk de la tablas 
    empresa: Empresa;

    // Relacion Muchos a Muchos con roles 
    // ---- Un usuario puede tener muchos roles ----

    @ManyToMany(
        () => Role, // Entidad con la que se relaciona 
        role => role.usuarios // Campo en roles al que nos referimos
    )
    @JoinTable({
        name: 'usuarios_roles', // Nombre de la tabla intermedia
        joinColumn: {
            name: 'usuario_id',
            referencedColumnName: 'id_usuario'
        },
        inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id_rol'
        }
    })
    roles: Role[]; // Propiedad para acceder a los roles del usuario

}
