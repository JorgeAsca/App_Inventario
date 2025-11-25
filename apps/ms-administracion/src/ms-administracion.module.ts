import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MsAdministracionController } from './ms-administracion.controller';
import { MsAdministracionService } from './ms-administracion.service';

// Importamos solo los Módulos, NO las entidades
import { EmpresaModule } from './empresa/empresa.module';
import { PermisoModule } from './permiso/permiso.module';
import { RoleModule } from './role/role.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

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
        
        // MAGIA: autoLoadEntities busca las entidades registradas en los módulos importados abajo
        autoLoadEntities: true, 
        synchronize: true,
        // logging: true, // Puedes activarlo si quieres ver SQL
      }),
    }),

    // Aquí importamos los módulos que ya tienen sus entidades cargadas dentro
    EmpresaModule,
    PermisoModule,
    RoleModule,
    UsuarioModule,
  ],
  controllers: [MsAdministracionController],
  providers: [MsAdministracionService],
})
export class MsAdministracionModule {}