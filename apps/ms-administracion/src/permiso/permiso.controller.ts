import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PermisoService } from './permiso.service';
import { CreatePermisoDto } from './dto/create-permiso.dto';
import { UpdatePermisoDto } from './dto/update-permiso.dto';

@Controller()
export class PermisoController {
  constructor(private readonly permisoService: PermisoService) {}

  @MessagePattern('createPermiso')
  create(@Payload() createPermisoDto: CreatePermisoDto) {
    return this.permisoService.create(createPermisoDto);
  }

  @MessagePattern('findAllPermiso')
  findAll() {
    return this.permisoService.findAll();
  }

  @MessagePattern('findOnePermiso')
  findOne(@Payload() id: number) {
    return this.permisoService.findOne(id);
  }

  @MessagePattern('updatePermiso')
  update(@Payload() updatePermisoDto: UpdatePermisoDto) {
    return this.permisoService.update(updatePermisoDto.id, updatePermisoDto);
  }

  @MessagePattern('removePermiso')
  remove(@Payload() id: number) {
    return this.permisoService.remove(id);
  }
}
