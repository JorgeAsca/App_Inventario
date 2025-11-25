import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto'; // <--- Importar


@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @MessagePattern('createUsuario')
  // Asegúrate de que aquí diga CreateUsuarioDto en lugar de any
  create(@Payload() createUsuarioDto: CreateUsuarioDto) { 
    return this.usuarioService.create(createUsuarioDto);
  }

  @MessagePattern('findAllUsuario')
  findAll() {
    return this.usuarioService.findAll();
  }

  }