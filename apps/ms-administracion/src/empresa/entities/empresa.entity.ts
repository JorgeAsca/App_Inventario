import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'empresas' })
export class Empresa {
    @PrimaryColumn()
    id_empresa: string;

    @Column({type: 'varchar', length: 200})
    nombre_legal: string;

    // campos de ruc direcicion telefono email
    @Column({type: 'varchar', length: 13, unique: true})
    nombre_comercial: string;

    @Column({type: 'varchar', length: 300})
    nif_cif: string

    @Column({type: 'varchar', length: 15})
    estado: string;

    @Column({type: 'varchar', length: 100})
    email: string;

    @Column({type: 'varchar', length: 15})
    Fecha_alta: string;

    @Column({type: 'varchar', length: 15})
    Suscripcion: string;

    @OneToMany(
        () => Usuario, // Entidad con la que se relaciona
         usuario => usuario.empresa // Campo en el usuario a las que nos referimos
    )
    usuarios: Usuario[]; // Propiedad para acceder a los usuarios de la empresa


}
