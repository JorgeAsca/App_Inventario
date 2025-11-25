import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller()
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @MessagePattern('createEmpresa')
  create(@Payload() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }

  @MessagePattern('findAllEmpresa')
  findAll() {
    return this.empresaService.findAll();
  }

  // @MessagePattern('findOneEmpresa')
  // findOne(@Payload() id: number) {
  //   return this.empresaService.findOne(id);
  // }

  // @MessagePattern('updateEmpresa')
  // update(@Payload() updateEmpresaDto: UpdateEmpresaDto) {
  //   return this.empresaService.update(updateEmpresaDto.id, updateEmpresaDto);
  // }

  // @MessagePattern('removeEmpresa')
  // remove(@Payload() id: number) {
  //   return this.empresaService.remove(id);
  // }
}
