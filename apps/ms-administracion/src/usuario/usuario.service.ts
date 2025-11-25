import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Role } from '../role/entities/role.entity';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
  ) { }


  async create(createUsuarioDto: CreateUsuarioDto) {
    // Sacamos rolesIds e id_empresa del DTO
    const { rolesIds, id_empresa, ...usuarioData } = createUsuarioDto;

    // Creamos la instancia
    const nuevoUsuario = this.usuarioRepository.create({
      ...usuarioData,
      
      id_empresa: id_empresa, 
      empresa: { id_empresa: id_empresa } as any 
    });

    // Lógica de Roles
    if (rolesIds && rolesIds.length > 0) {
      const rolesEncontrados = await this.roleRepository.findBy({
        id_rol: In(rolesIds),
      });
      nuevoUsuario.roles = rolesEncontrados;
    }

    // Guardar
    return await this.usuarioRepository.save(nuevoUsuario);
  }

  async findAll() {
    return this.usuarioRepository.find({
      relations: ['roles', 'empresa']
    });
  }
}
