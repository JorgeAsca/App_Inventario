import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MsAdministracionController } from './ms-administracion.controller';
import { MsAdministracionService } from './ms-administracion.service';
import { Usuario } from './database/entities/usuario.entity';
import { Empresa } from './database/entities/empresa.entity';
import { Role } from './database/entities/role.entity';
import { Permiso } from './database/entities/permiso.entity';

@Module({
  imports: [
    //Configuración de Variables de Entorno
    ConfigModule.forRoot({
      isGlobal: true, // Disponible en todo el módulo
      envFilePath: '.env', // Lee el archivo localmente (en Docker lo ignora y usa las del sistema)
    }),

    // Configuración de Base de Datos ASÍNCRONA

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        
        host: configService.get<string>('DB_HOST'), 
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        
        // Cargamos las entidades explícitamente
        entities: [Usuario, Empresa, Role, Permiso],
        
      // SOLO PARA DESARROLLO:
        synchronize: true, 
        // logging: true nos permite ver las queries SQL en la consola 
        logging: true, 
      }),
    }),

    // 3. Registro de Repositorios (Feature)
    // Esto permite usar @InjectRepository(Usuario) en los servicios
    TypeOrmModule.forFeature([Usuario, Empresa, Role, Permiso]),
  ],
  controllers: [MsAdministracionController],
  providers: [MsAdministracionService],
})
export class MsAdministracionModule {}